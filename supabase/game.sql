-- ============================================================================
-- Hushlantern: production game + analytics.  Run once in Supabase:
--   Dashboard → SQL Editor → New query → paste this whole file → Run.
-- Safe to run again (it replaces functions and keeps data).
--
-- Visitors never touch tables directly. Everything goes through the functions
-- below, which check who is asking and what they are allowed to see:
--   • cloud saves:        data/users/<your id>/save  → only you
--   • multiplayer tables: tables/<CODE>/…           → signed-in players who know the
--                          4-letter code; tables expire after 24 h; code guessing is
--                          rate-limited; you can only write your own player/result docs
--   • analytics events:   anyone can add (no cookies, no IP stored); only admins read
-- ============================================================================

-- Tables and internal helpers live in the private "hl" schema, which the public API
-- cannot reach. Only the functions in "public" below can be called by the website.
create schema if not exists hl;

-- ---------- game documents ----------
create table if not exists hl.game_docs (
  path       text primary key check (char_length(path) <= 200),
  parent     text not null,
  data       jsonb not null check (pg_column_size(data) <= 65536),
  owner      uuid,
  updated_at timestamptz not null default now()
);
create index if not exists game_docs_parent on hl.game_docs (parent);
alter table hl.game_docs enable row level security;

create table if not exists hl.join_attempts (
  user_id uuid not null,
  at      timestamptz not null default now()
);
create index if not exists join_attempts_user_at on hl.join_attempts (user_id, at);
alter table hl.join_attempts enable row level security;

-- Is this path allowed for the current user?
create or replace function hl.hl_path_ok(p text, for_write boolean)
returns boolean language plpgsql stable security definer set search_path = public, hl as $$
declare
  uid uuid := auth.uid();
  seg text[];
  n   int;
begin
  if p is null or p !~ '^[A-Za-z0-9_.\-]+(/[A-Za-z0-9_.\-]+)*$' then return false; end if;
  seg := string_to_array(p, '/'); n := array_length(seg, 1);
  if seg[1] = 'daily' then return (not for_write) and n <= 2; end if;   -- nightly cases: read-only
  if uid is null then return false; end if;                              -- everything else needs sign-in
  if seg[1] = 'data' and n >= 3 and seg[2] = 'users' then return seg[3] = uid::text and n <= 4; end if;
  if seg[1] = 'tables' then
    if n < 2 or seg[2] !~ '^[BCDFGHJKLMNPQRSTVWXZ]{4}$' then return false; end if;
    if not for_write then return n <= 6; end if;
    if n = 2 then return true; end if;                                   -- table header
    if n = 4 and seg[3] = 'cases' then return true; end if;              -- shared co-op case state
    if n = 6 and seg[3] = 'cases' and seg[5] = 'players' then return seg[6] = uid::text; end if;
    if n = 4 and seg[3] = 'results' then return seg[4] like '%.' || uid::text; end if;
    return false;
  end if;
  return false;
end $$;

-- Is the multiplayer table for this path open (exists and under 24 h old)?
create or replace function hl.hl_table_open(p text)
returns boolean language sql stable security definer set search_path = public, hl as $$
  select exists (
    select 1 from hl.game_docs
    where path = array_to_string((string_to_array(p, '/'))[1:2], '/')
      and updated_at > now() - interval '24 hours')
$$;

create or replace function public.doc_get(p text)
returns jsonb language plpgsql security definer set search_path = public, hl as $$
declare d jsonb; seg text[] := string_to_array(p, '/');
begin
  if not hl.hl_path_ok(p, false) then raise exception 'not_allowed' using errcode = '42501'; end if;
  if seg[1] = 'tables' then
    if array_length(seg, 1) = 2 then   -- looking up a table code = joining: rate-limit guessing
      if (select count(*) from hl.join_attempts where user_id = auth.uid() and at > now() - interval '1 hour') >= 30 then
        raise exception 'rate_limited' using errcode = '42501';
      end if;
      insert into hl.join_attempts (user_id) values (auth.uid());
    end if;
    if not hl.hl_table_open(p) then return null; end if;
  end if;
  select data into d from hl.game_docs where path = p;
  return d;
end $$;

create or replace function public.doc_list(prefix text)
returns table (id text, data jsonb) language plpgsql security definer set search_path = public, hl as $$
begin
  if not hl.hl_path_ok(prefix, false) then raise exception 'not_allowed' using errcode = '42501'; end if;
  if split_part(prefix, '/', 1) = 'tables' and not hl.hl_table_open(prefix) then return; end if;
  return query
    select split_part(g.path, '/', array_length(string_to_array(g.path, '/'), 1)), g.data
    from hl.game_docs g where g.parent = prefix
    order by g.updated_at;
end $$;

create or replace function public.doc_set(p text, d jsonb)
returns void language plpgsql security definer set search_path = public, hl as $$
declare
  seg text[] := string_to_array(p, '/');
  n   int    := array_length(string_to_array(p, '/'), 1);
  cur hl.game_docs;
begin
  if not hl.hl_path_ok(p, true) then raise exception 'not_allowed' using errcode = '42501'; end if;
  if pg_column_size(d) > 65536 then raise exception 'too_large'; end if;
  if seg[1] = 'tables' then
    if n = 2 then
      select * into cur from hl.game_docs where path = p;
      if found and cur.updated_at > now() - interval '24 hours' and cur.owner is distinct from auth.uid() then
        raise exception 'table_taken' using errcode = '42501';
      end if;
      if found and cur.updated_at <= now() - interval '24 hours' then
        delete from hl.game_docs where path like p || '/%';         -- expired: clear old game
      end if;
    elsif not hl.hl_table_open(p) then
      raise exception 'table_closed' using errcode = '42501';
    end if;
  end if;
  insert into hl.game_docs (path, parent, data, owner, updated_at)
  values (p, array_to_string(seg[1:n-1], '/'), d, auth.uid(), now())
  on conflict (path) do update set data = excluded.data, updated_at = now(),
    owner = coalesce(hl.game_docs.owner, excluded.owner);
end $$;

grant execute on function public.doc_get(text), public.doc_list(text) to anon, authenticated;
grant execute on function public.doc_set(text, jsonb) to authenticated;

-- ---------- parental consent records ----------
create table if not exists hl.consents (
  id          bigint generated always as identity primary key,
  user_id     uuid not null,
  profile_ref text not null check (char_length(profile_ref) <= 40),
  method      text not null check (method in ('signed_in_parent','vendor_verified')),
  at          timestamptz not null default now()
);
alter table hl.consents enable row level security;

create or replace function public.record_consent(profile_ref text, method text default 'signed_in_parent')
returns void language plpgsql security definer set search_path = public, hl as $$
begin
  if auth.uid() is null then raise exception 'sign_in_required' using errcode = '42501'; end if;
  insert into hl.consents (user_id, profile_ref, method) values (auth.uid(), left(profile_ref, 40), method);
end $$;
grant execute on function public.record_consent(text, text) to authenticated;

-- ---------- analytics (cookie-free, no IP addresses) ----------
create table if not exists hl.events (
  id          bigint generated always as identity primary key,
  at          timestamptz not null default now(),
  app         text not null check (app in ('site','game','admin')),
  kind        text not null check (kind ~ '^[a-z_]{2,32}$'),
  session_id  uuid not null,
  user_id     uuid,
  profile_ref text check (char_length(profile_ref) <= 40),
  page        text check (char_length(page) <= 120),
  ref         text check (char_length(ref) <= 120),
  age_band    text check (age_band in ('8-10','11-13','14-17','18+')),
  region      text check (char_length(region) <= 8),
  lang        text check (char_length(lang) <= 8),
  device      text check (device in ('phone','tablet','desktop')),
  dur_ms      integer check (dur_ms between 0 and 3600000),
  props       jsonb check (props is null or pg_column_size(props) <= 2048)
);
create index if not exists events_at on hl.events (at);
create index if not exists events_app_kind_at on hl.events (app, kind, at);
alter table hl.events enable row level security;

create or replace function public.log_events(batch jsonb)
returns integer language plpgsql security definer set search_path = public, hl as $$
declare k integer;
begin
  if jsonb_typeof(batch) <> 'array' or jsonb_array_length(batch) > 50 then return 0; end if;
  insert into hl.events (app, kind, session_id, user_id, profile_ref, page, ref, age_band, region, lang, device, dur_ms, props)
  select e->>'app', e->>'kind', (e->>'session_id')::uuid, auth.uid(),
         left(e->>'profile_ref', 40), left(e->>'page', 120), left(e->>'ref', 120),
         case when e->>'age_band' in ('8-10','11-13','14-17','18+') then e->>'age_band' end,
         left(e->>'region', 8), left(e->>'lang', 8),
         case when e->>'device' in ('phone','tablet','desktop') then e->>'device' end,
         case when (e->>'dur_ms') ~ '^\d{1,7}$' then least((e->>'dur_ms')::int, 3600000) end,
         case when jsonb_typeof(e->'props') = 'object' and pg_column_size(e->'props') <= 2048 then e->'props' end
  from jsonb_array_elements(batch) e
  where e->>'app' in ('site','game','admin')
    and coalesce(e->>'kind','') ~ '^[a-z_]{2,32}$'
    and coalesce(e->>'session_id','') ~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$';
  get diagnostics k = row_count;
  return k;
end $$;
grant execute on function public.log_events(jsonb) to anon, authenticated;

-- Keep 13 months of events and 7 days of finished multiplayer games. Schedule nightly with pg_cron (Database → Extensions → pg_cron), then
--   select cron.schedule('purge-old-events', '15 4 * * *', 'select hl.purge_old_events()');
create or replace function hl.purge_old_events()
returns integer language plpgsql security definer set search_path = public, hl as $$
declare k integer;
begin
  delete from hl.events where at < now() - interval '13 months';
  get diagnostics k = row_count;
  delete from hl.game_docs where path like 'tables/%' and updated_at < now() - interval '7 days';  -- finished multiplayer games
  delete from hl.join_attempts where at < now() - interval '1 day';
  return k;
end $$;

-- ---------- admins + dashboard summary ----------
create table if not exists hl.admins (email text primary key);
alter table hl.admins enable row level security;
-- Add yourself (change the address if you sign in with a different one):
insert into hl.admins (email) values ('ananditjoshi@gmail.com') on conflict do nothing;

create or replace function hl.is_admin()
returns boolean language sql stable security definer set search_path = public, hl as $$
  select exists (select 1 from hl.admins where lower(email) = lower(coalesce(auth.jwt()->>'email','')))
$$;

create or replace function public.analytics_summary(days integer default 30)
returns jsonb language plpgsql stable security definer set search_path = public, hl as $$
declare
  since timestamptz;
  out   jsonb;
begin
  if not hl.is_admin() then raise exception 'not_admin' using errcode = '42501'; end if;
  days := greatest(1, least(coalesce(days, 30), 400));
  since := date_trunc('day', now()) - make_interval(days => days - 1);
  with ev as (select * from hl.events where at >= since),
  site_s as (select session_id, sum(coalesce(dur_ms,0)) ms from ev where app='site' and kind='time' group by 1),
  game_s as (select session_id, max(user_id::text) uid, sum(coalesce(dur_ms,0)) ms from ev where app='game' and kind='time' group by 1),
  days_ as (select generate_series(date_trunc('day', since), date_trunc('day', now()), interval '1 day')::date d)
  select jsonb_build_object(
    'range', jsonb_build_object('days', days, 'since', since, 'until', now()),
    'totals', jsonb_build_object(
      'site_sessions',      (select count(distinct session_id) from ev where app='site'),
      'page_views',         (select count(*) from ev where app='site' and kind='page_view'),
      'avg_site_seconds',   (select round(avg(ms)/1000.0) from site_s where ms > 0),
      'sign_ins',           (select count(*) from ev where app='game' and kind in ('sign_in','sign_up')),
      'new_families',       (select count(*) from ev where app='game' and kind='sign_up'),
      'active_families',    (select count(distinct user_id) from ev where app='game' and user_id is not null),
      'active_players',     (select count(distinct profile_ref) from ev where app='game' and profile_ref is not null),
      'guest_sessions',     (select count(distinct session_id) from ev where app='game' and user_id is null),
      'game_sessions',      (select count(distinct session_id) from ev where app='game'),
      'avg_game_minutes',   (select round(avg(ms)/60000.0, 1) from game_s where ms > 0),
      'play_hours',         (select round(coalesce(sum(ms),0)/3600000.0, 1) from game_s),
      'cases_solved',       (select count(*) from ev where app='game' and kind='case_solved'),
      'waitlist_total',     (select count(*) from public.waitlist),
      'waitlist_new',       (select count(*) from public.waitlist where created_at >= since)
    ),
    'daily', (select coalesce(jsonb_agg(jsonb_build_object(
        'day', d,
        'site_sessions',   (select count(distinct session_id) from ev where app='site' and at::date = d),
        'game_sessions',   (select count(distinct session_id) from ev where app='game' and at::date = d),
        'sign_ins',        (select count(*) from ev where app='game' and kind in ('sign_in','sign_up') and at::date = d),
        'active_families', (select count(distinct user_id) from ev where app='game' and at::date = d and user_id is not null),
        'play_minutes',    (select round(coalesce(sum(dur_ms),0)/60000.0) from ev where app='game' and kind='time' and at::date = d),
        'site_minutes',    (select round(coalesce(sum(dur_ms),0)/60000.0) from ev where app='site' and kind='time' and at::date = d)
      ) order by d), '[]') from days_),
    'pages', (select coalesce(jsonb_agg(x order by views desc), '[]') from (
        select page, count(*) views, round(avg(t.ms)/1000.0) avg_seconds
        from ev left join (select session_id s, page p, sum(dur_ms) ms from ev where app='site' and kind='time' group by 1,2) t
          on t.s = ev.session_id and t.p = ev.page
        where app='site' and kind='page_view' group by page limit 20) x),
    'referrers', (select coalesce(jsonb_agg(x order by sessions desc), '[]') from (
        select coalesce(nullif(ref,''),'(direct)') ref, count(distinct session_id) sessions
        from ev where app='site' and kind='page_view' group by 1 order by 2 desc limit 10) x),
    'devices', (select coalesce(jsonb_agg(x order by sessions desc), '[]') from (
        select coalesce(device,'unknown') device, app, count(distinct session_id) sessions from ev group by 1,2) x),
    'age_bands', (select coalesce(jsonb_agg(x order by band), '[]') from (
        select age_band band, count(distinct profile_ref) players from ev
        where app='game' and age_band is not null group by 1) x),
    'worlds', (select coalesce(jsonb_agg(x order by opened desc), '[]') from (
        select props->>'world' world,
               count(*) filter (where kind='case_open') opened,
               count(*) filter (where kind='case_solved') solved,
               round(avg((props->>'attempts')::numeric) filter (where kind='case_solved'), 1) avg_wrong,
               round(avg((props->>'secs')::numeric) filter (where kind='case_solved') / 60.0, 1) avg_minutes
        from ev where app='game' and kind in ('case_open','case_solved') and props ? 'world' group by 1) x),
    'languages', (select coalesce(jsonb_agg(x order by sessions desc), '[]') from (
        select coalesce(lang,'?') lang, count(distinct session_id) sessions from ev where app='game' group by 1) x),
    'regions', (select coalesce(jsonb_agg(x order by signups desc), '[]') from (
        select region, count(*) signups from public.waitlist group by 1) x)
  ) into out;
  return out;
end $$;
grant execute on function public.analytics_summary(integer) to authenticated;

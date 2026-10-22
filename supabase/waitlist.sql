-- Hushlantern waitlist. Run once in Supabase: Dashboard → SQL Editor → New query → paste → Run.
-- Visitors (the "anon" role) can only ADD a sign-up. Nobody outside your team can read,
-- change or delete rows. You read the list in Table Editor → waitlist.

create table if not exists public.waitlist (
  id          bigint generated always as identity primary key,
  email       text        not null check (char_length(email) <= 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  ages        text[]      check (ages is null or (cardinality(ages) <= 5 and ages <@ array['8-10','11-13','14-17','adult','class'])),
  region      text        not null default 'US' check (region in ('US','CA','other')),
  lang        text        not null default 'en' check (char_length(lang) <= 5),
  consent     boolean     not null check (consent),
  created_at  timestamptz not null default now()
);

-- One sign-up per email (case-insensitive). A repeat sign-up returns 409, which the site treats as "already on the list".
create unique index if not exists waitlist_email_unique on public.waitlist (lower(email));

alter table public.waitlist enable row level security;

-- Visitors may insert only these columns; id and created_at are always set by the database.
revoke all on public.waitlist from anon, authenticated;
grant insert (email, ages, region, lang, consent) on public.waitlist to anon;

drop policy if exists "visitors can join the waitlist" on public.waitlist;
create policy "visitors can join the waitlist"
  on public.waitlist for insert to anon
  with check (consent);

-- No select / update / delete policies: with row level security on, those are denied to visitors.

-- Handy view for your team (visible in the dashboard only):
create or replace view public.waitlist_summary with (security_invoker = true) as
  select region, count(*) as signups, min(created_at) as first, max(created_at) as latest
  from public.waitlist group by region;
revoke all on public.waitlist_summary from anon, authenticated;

# hushlantern.com

The Hushlantern Games website: studio intro, Inspector Wren's Casebook (playable at /play), the parents' guide, a privacy notice, a launch waitlist, cookie-free analytics and a private studio dashboard at /admin. Everything is static files on GitHub Pages, with Supabase for accounts and data.

```
index.html          home: game, worlds, how it plays, learning, parents, studio, waitlist
parents.html        parents' guide
privacy.html        privacy notice (website + waitlist)
404.html            "this clue leads nowhere" page
CNAME               tells GitHub Pages the domain is hushlantern.com
assets/config.js    ← the only file you edit: Supabase URL + key, and later the game link
assets/             styles, script, images, teaser video
play/               the game (index.html, game.js, Supabase adapter, nightly cases in play/daily/)
admin/              private studio dashboard (admins only)
supabase/waitlist.sql   database setup for the waitlist (run once)
supabase/game.sql       database setup for the game, analytics and dashboard (run once, safe to re-run)
```

## Game + analytics setup in Supabase (one time)

1. **SQL Editor → New query →** paste all of `supabase/game.sql` → **Run**. It also adds `ananditjoshi@gmail.com` as the dashboard admin. To add another admin: `insert into public.admins (email) values ('someone@example.com');`
2. **Authentication → URL Configuration:**
   - Site URL: `https://hushlantern.com`
   - Redirect URLs: add `https://hushlantern.com/play/` and `https://hushlantern.com/admin/`
3. **Authentication → Emails → SMTP Settings: set up your own email sender before inviting families.** Supabase's built-in sender only delivers to your own team's addresses and only a few emails an hour. A free Resend account (resend.com) works well: verify hushlantern.com there (it gives you DNS records to add in GoDaddy), then paste its SMTP details here with sender `hello@hushlantern.com`.
4. Optional but recommended: **Database → Extensions →** enable `pg_cron`, then in the SQL Editor run
   `select cron.schedule('purge-old-events', '15 4 * * *', 'select public.purge_old_events()');`
   so measurement records older than 13 months and finished multiplayer tables are deleted automatically, as the privacy notice promises.

The dashboard is at **hushlantern.com/admin**: sign in to the game once with your admin email, then use the same email there.

## 1. Set up the waitlist in Supabase (about 10 minutes)

1. Go to supabase.com → **New project**. Name it `hushlantern`, pick a strong database password and a US region (US East is closest to Boston).
2. When it's ready, open **SQL Editor → New query**, paste everything from `supabase/waitlist.sql`, and click **Run**.
3. Open **Project Settings → API** (or **Connect**). Copy the **Project URL** and the **anon public** key.
4. Paste both into `assets/config.js`:
   ```js
   supabaseUrl: "https://xxxxxxxx.supabase.co",
   supabaseAnonKey: "eyJ...",
   ```
   The anon key is meant to be public. The database only lets visitors **add** a sign-up. Nobody can read, change or delete the list except you, in the Supabase dashboard.

To see sign-ups: **Table Editor → waitlist**. You can export them as CSV from there.

## 2. Publish on GitHub Pages (about 10 minutes)

1. On github.com, create a new repository named `hushlantern-site`. Public is fine.
2. Click **uploading an existing file** and drag in **everything inside this folder** (not the folder itself), including the `CNAME` and `.nojekyll` files. Commit.
   *Tip: on a Mac, press Cmd+Shift+. in Finder to see the hidden `.nojekyll` file.*
3. Open **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. In the same page, under **Custom domain**, make sure `hushlantern.com` is filled in, then **Save**.

## 3. Point hushlantern.com at GitHub (at your domain registrar)

Add these DNS records, and remove any old A/AAAA records for the bare domain:

| Type  | Name / Host | Value |
|-------|-------------|-------|
| A     | @ | 185.199.108.153 |
| A     | @ | 185.199.109.153 |
| A     | @ | 185.199.110.153 |
| A     | @ | 185.199.111.153 |
| AAAA  | @ | 2606:50c0:8000::153 |
| AAAA  | @ | 2606:50c0:8001::153 |
| AAAA  | @ | 2606:50c0:8002::153 |
| AAAA  | @ | 2606:50c0:8003::153 |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

DNS can take up to 24 hours to update. Once GitHub shows the domain as working, tick **Enforce HTTPS** in **Settings → Pages**.

Recommended: verify the domain on your GitHub account (**Settings → Pages → Add a verified domain**) so nobody else can claim it.

## 4. Set up the email address

The site lists **hello@hushlantern.com**. Create it, or a forward to your inbox, at your domain registrar (most offer free email forwarding).

## Later

- **When the game is live on your domain:** put its address in `playUrl` in `assets/config.js`. The hero button changes from "Join the waitlist" to "Play free now".
- **If bots start spamming the waitlist:** add Cloudflare Turnstile in front of it. The form already has a hidden trap field.
- **Before the game launches:** have a lawyer review `privacy.html`. The game will also need its own children's privacy policy (COPPA in the US, PIPEDA and Quebec Law 25 in Canada).
- **For Quebec:** a French version of the site is recommended.

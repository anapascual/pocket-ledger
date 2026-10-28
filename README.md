# Pocket Ledger (standalone)

Your money tracker as an installable web app. It runs without Claude, works offline,
and keeps all your data on the device you use it on. Nothing is sent anywhere.

## 1. Put it online (free, GitHub Pages, about 10 minutes)

1. Create a free account at github.com if you don't have one.
2. Click **+** (top right) → **New repository**.
   - Name: `pocket-ledger`
   - Visibility: **Public** (free GitHub Pages needs this; only the app's code is public, never your data)
   - Click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Unzip `pocket-ledger.zip` on your computer. Open the `pocket-ledger` folder, select **everything inside it**
   (index.html, sw.js, manifest.webmanifest, README.md and the folders fonts, icons, vendor) and drag it all onto the page.
   Use Chrome or Edge on a computer so the folders upload too.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**,
   branch **main**, folder **/ (root)**, and click **Save**.
7. Wait a minute or two and refresh. The page shows your app's address:
   `https://YOUR-USERNAME.github.io/pocket-ledger/`

## 2. Install it on your phone

- **iPhone:** open the address in **Safari** → Share → **Add to Home Screen**.
- **Android:** open it in **Chrome** → ⋮ → **Install app** (or **Add to home screen**).

## 3. Move your data over

1. In the Claude version of Pocket Ledger: **Settings, budgets & data → Full backup → Download full backup**.
2. Get that file onto your phone (it's already there if you downloaded it on the phone).
3. Open the **installed** app (from the home-screen icon, not the browser tab), go to
   **Settings, budgets & data → Restore backup**, choose the file, then tap **Restore**.

On iPhone the home-screen app keeps its own data, separate from Safari, so always restore inside the installed app.

## Good to know

- **One device is your main ledger.** Phone and laptop each keep their own copy; they don't sync.
  To move, download a backup on one and restore it on the other.
- **Back up every week or two.** The app shows "Last backup: …" under Full backup and turns it red after 30 days.
  If you lose or reset your phone, the backup file is the only copy.
- **What's not included:** the AI check-in and AI reading of typed messages. Typing like a message
  ("coffee 2,40", "pizza 12 yesterday") still works with the built-in rules.

## Updating the app later

Upload the changed files to the same repository (they replace the old ones), and change the `VERSION`
line at the top of `sw.js` (for example `pl-2026-11-15-1`). Phones pick up the new version the next time
the app is opened. Your data is not affected by updates.

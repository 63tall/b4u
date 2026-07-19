# Wayfinder — a five-island apology

A small, animated, Moana-inspired site: five pages, wayfinding stars,
drifting waves, an interactive promise grid, and a last page with a
yes/no choice.

## What's in here

```
index.html      Chapter 1 — "I know you're angry"
page2.html      Chapter 2 — owning what happened
page3.html      Chapter 3 — five tappable promises
page4.html      Chapter 4 — tap to restore the color
page5.html      Chapter 5 — "one last chance," yes or no
assets/
  style.css     all styling, animation, and color tokens
  script.js     stars, waves, word-reveal, promise cards, finale
  favicon.svg   tab icon
.nojekyll       tells GitHub Pages not to run Jekyll on this folder
```

No build step, no dependencies — just static files. The only external
resource is Google Fonts (Fraunces + Quicksand), loaded over HTTPS.

## Put it on GitHub Pages (5 minutes)

1. Create a new **public** GitHub repository — name doesn't matter,
   e.g. `for-her`.
2. Upload every file in this folder to the repo, keeping the `assets`
   folder structure intact. Easiest way:
   - On the repo page, click **Add file → Upload files**.
   - Drag in `index.html`, `page2.html`, `page3.html`, `page4.html`,
     `page5.html`, `.nojekyll`, `README.md`, and the whole `assets`
     folder.
   - Commit directly to the `main` branch.
3. Go to **Settings → Pages** (left sidebar).
4. Under **Build and deployment → Source**, choose **Deploy from a
   branch**.
5. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
6. Wait about a minute, then refresh the Pages settings tab — GitHub
   will show your live URL, something like:
   `https://your-username.github.io/for-her/`
7. Open that link yourself first to check everything loads, then
   share it with her — first page only, so she starts at Chapter 1.

### If you'd rather use git on the command line

```bash
git init
git add .
git commit -m "wayfinder"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Then follow steps 3–6 above.

## Making it yours

- **Text**: every chapter's words live directly in its `.html` file —
  search for the `<p class="lede">` and `<div class="quote-block">`
  tags to edit.
- **Promises (Chapter 3)**: open `page3.html` and edit the five
  `<h3>` / `<p>` pairs inside `.promise-card` blocks.
- **Colors**: all defined once at the top of `assets/style.css` under
  `:root` — change `--coral`, `--gold`, `--lagoon`, etc.
- **Repo visibility**: the repo (and site) will be public unless you
  pay for GitHub Pro/Team, which allows Pages on a private repo. If
  you'd rather keep it unlisted, use a repo name that isn't guessable
  and only ever share the exact URL — Pages sites aren't indexed by
  search engines by default (no sitemap is included here), but they
  are technically reachable by anyone with the link.

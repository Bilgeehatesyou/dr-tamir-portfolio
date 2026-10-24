# Dr. Tamir Doljinsuren · portfolio

A static bilingual (English / Mongolian) site. No build step.

## Run locally

```bash
python3 -m http.server 4400 -d tamir-portfolio
```

Then open http://localhost:4400. Add `?lang=mn` or `?lang=en` to link straight to one language; otherwise the site remembers the visitor's last choice, then falls back to the browser language.

## Deploy

Live at https://dr-tamir.vercel.app (Vercel project `dr-tamir` on Tamir's DrTMR account, tamirdoctor-6868).

Every push to `main` on https://github.com/Bilgeehatesyou/dr-tamir-portfolio publishes the site automatically through GitHub Actions (`.github/workflows/deploy.yml`). The workflow uses a Vercel token from Tamir's account, stored as the `VERCEL_TOKEN` repository secret. If deploys stop working, create a new token at vercel.com/account/settings/tokens (signed in as DrTMR) and replace that secret.

`.vercelignore` keeps working files (`PRODUCT.md`, `README.md`, `DESIGN.md`, `.impeccable/`, `.env*`) out of the upload. After changing `styles.css` or `app.js`, bump the `?v=` number on their links in `index.html` so browsers fetch the new files.

## Editing content

All copy lives in `index.html`. Every piece of text is written twice, side by side:

```html
<span lang="en">Director</span><span lang="mn">Дарга</span>
```

Change both. Headings with `class="bi"` show both languages at once (active one large, the other beneath), like hospital signage.

## Still to confirm with Tamir

- Facebook page link: only the name "Тамир Эмч" was available, so it is shown as text.
- 2013–2016 role: the English CV says "General Physician", the Mongolian CV says "Ерөнхий эмч" (often means chief physician). Both are shown as written.
- Only the English CV is offered for download. The Mongolian CV includes personal details (birth date, family, origin) that are left off the public site.

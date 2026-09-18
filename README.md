<<<<<<< HEAD
# AsliConnect — AKAR Connect Demo

A front-end-only React prototype of **AKAR Connect** (Access, Keusahawanan,
Agihan, Rezeki) — a jobs & e-commerce platform connecting Orang Asli
businesses, durian farm workers, and single mothers directly to customers,
employers, and a digital wallet.

No backend, no database — all data lives in `src/data.js` and in React
state. This is a clickable prototype meant for demos, pitches, and CSR
presentations.

## What's inside

| Tab | What it shows |
|---|---|
| **Home** | Hero, problem to solution narrative, 4-step "how it works" |
| **Business Profiles** | Verified Orang Asli business/vendor cards |
| **Job Marketplace** | Job/service requests (durian climbing, jungle guiding, home-based work) with an "Apply" button |
| **Product Store** | E-commerce grid with a working in-memory cart |
| **Digital Wallet** | Wallet balance, transaction history, and a **live-generated sample payment QR code** |
| **Impact & SDGs** | Key stats and SDG 1/5/8/10/12/17 alignment cards |

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Deploy to GitHub Pages — step by step

**1. Create a GitHub repo** (e.g. `akar-connect`) and push this project:

```bash
git init
git add .
git commit -m "Initial commit - AsliConnect prototype"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/akar-connect.git
git push -u origin main
```

**2. Set the base path.** Open `vite.config.js` and make sure `base`
matches your repo name exactly:

```js
base: '/akar-connect/',
```

If you rename the repo, update `homepage` in `package.json` too.

**3. Enable GitHub Pages via GitHub Actions** (recommended, already set
up for you in `.github/workflows/deploy.yml`):
   - Go to your repo, Settings, Pages
   - Under "Build and deployment", Source, choose **GitHub Actions**
   - Push to `main` — the included workflow builds and deploys
     automatically on every push. Watch progress under the Actions tab.

**Alternative: manual deploy with `gh-pages`** (if you'd rather not use
Actions):

```bash
npm run deploy
```

This runs `vite build` then pushes the `dist/` folder to a `gh-pages`
branch. Then in Settings, Pages, set Source to the `gh-pages` branch.

**4. Visit your site** at:

```
https://YOUR-USERNAME.github.io/akar-connect/
```

It can take 1-2 minutes after the first deploy for the page to go live.

## Project structure

```
akar-connect/
├── .github/workflows/deploy.yml   # auto-deploy on push to main
├── src/
│   ├── components/                # one component per tab
│   ├── data.js                    # all sample data (edit this to rebrand)
│   ├── App.jsx                    # tab navigation shell
│   ├── index.css                  # design tokens + all styling
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Customizing

- **Swap sample data:** edit `src/data.js` — businesses, jobs, products,
  impact stats, and SDG copy all live there.
- **Change the QR payload:** in `src/components/Wallet.jsx`, the
  `payload` string is what gets encoded — replace it with a real payment
  link once a gateway (e.g. DuitNow QR, Stripe, Billplz) is integrated.
- **Colors/fonts:** all design tokens are CSS variables at the top of
  `src/index.css` (`--canopy`, `--moss`, `--durian`, `--clay`, etc.)
  and the Google Fonts `<link>` tags are in `index.html`.
- **Add a real backend later:** this prototype is intentionally
  database-free. When you're ready, replace the static imports in
  `src/data.js` with `fetch()` calls to an API, and swap in-memory
  state for real auth and persistence.
=======
# AKAR
>>>>>>> c5d733c1bbf0edad56359a53fb2d1dd2c4b48906

# Tropicai Public Website

Farm direct Sri Lankan natural foods. Nature's purest, delivered to your doorstep.

React + Vite storefront with a shopping cart that sends orders to WhatsApp (+94 71 158 3293). No checkout or payment processing.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Upload the `dist` folder to any static host.

## Deploy on Netlify

The repo includes `netlify.toml`, so Netlify detects everything automatically:

1. Netlify → **Add new site** → **Import an existing project** → GitHub → pick this repo.
2. Build command `npm run build`, publish directory `dist` (prefilled from `netlify.toml`).
3. Every push to `main` deploys automatically.
4. Custom domain: **Site configuration → Domain management → Add a domain**, then add the DNS records Netlify shows at your registrar.

## Editing products and prices

All products, prices and the WhatsApp number live in `src/data.js`. Set `price: null` to show an item as "price on request". Media files are in `public/media`.

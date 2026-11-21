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

Upload the `dist` folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## Editing products and prices

All products, prices and the WhatsApp number live in `src/data.js`. Set `price: null` to show an item as "price on request". Media files are in `public/media`.

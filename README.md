# landing-page-demo

Arabic RTL landing page built with Next.js and Tailwind CSS.

It showcases a fictional Algerian perfume shop ("دار مِسك") on a single page:
hero, three features, an offer/pricing block, an order form and a footer.
The order form is a demo: it validates input and shows a confirmation, but
sends nothing to any server.

## Tech stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Arabic fonts (Tajawal and Amiri) loaded with `next/font/google`

## Requirements

- Node.js 20.9 or later
- npm

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Scripts

| Command         | What it does                                 |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Starts the development server with reload    |
| `npm run build` | Creates an optimized production build        |
| `npm run start` | Serves the production build (run build first)|
| `npm run lint`  | Runs ESLint                                  |

## Project structure

```
app/
  layout.tsx      Root layout: <html lang="ar" dir="rtl">, fonts, metadata
  page.tsx        The landing page, composed from the sections below
  globals.css     Tailwind import and the color/font theme tokens
components/
  Hero.tsx        Header, headline, product image and order button
  Features.tsx    The three product features
  Pricing.tsx     The launch offer and what is included
  OrderForm.tsx   Client-side order form (name, phone, wilaya)
  Footer.tsx      Contact details and demo notice
lib/
  product.ts      Product name, prices and price formatting
  wilayas.ts      List of the 58 Algerian wilayas for the form
public/
  perfume.svg     Hero illustration
```

## Customizing

- Product name and prices: `lib/product.ts`
- Colors and fonts: the `@theme` block in `app/globals.css`
- Section copy: the matching file in `components/`

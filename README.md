# Reelax Billing Checkout

A production-quality React implementation of the Reelax billing/payment checkout dashboard. The page is built as a polished SaaS checkout surface with a responsive billing form, order summary, wallet credits, coupon selection, pricing breakdown, and payment CTA.

## Tech Stack

- React JS with Vite
- Tailwind CSS design tokens
- Lucide React icons
- React Hooks for form, coupon, wallet, and navigation state

## Project Structure

```text
src/
  assets/
  components/
    common/       Reusable Button, Card, InputField, SelectField, RadioOption
    layout/       Header and MainLayout
    billing/      BillingForm
    summary/      OrderSummary, CouponSection, WalletCard, PricingBreakdown
  constants/      Billing options and pricing data
  hooks/          Reusable disclosure hook
  pages/          CheckoutPage
  utils/          Currency formatting helpers
```

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

## Deployment

This app can be deployed to Vercel, Netlify, or any static hosting provider.

1. Push the repository to GitHub.
2. Import the project in your hosting provider.
3. Use `npm run build` as the build command.
4. Use `dist` as the publish directory.

## Implementation Notes

- Desktop layout uses a two-column checkout composition with the form taking the primary width and the summary pinned on the right.
- Tablet and mobile layouts compress naturally, then stack the summary below the form.
- Controls include hover, active, and keyboard-visible focus states.
- Tailwind configuration defines the design system for color, radius, shadow, spacing, and typography.

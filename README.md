# TENWi WEBSHOP

Headless WooCommerce webshop built with Next.js, connected to a WordPress backend via GraphQL.

## Tech Stack

- **Next.js** 14 (React 18, TypeScript)
- **WooCommerce** via WordPress GraphQL
- **Apollo Client** for GraphQL
- **Stripe** & **PayPal** for payments
- **Tailwind CSS** + **Sass** for styling
- **Mailchimp** for newsletters
- **GSAP / Framer Motion** for animations

## Prerequisites

- Node.js >= 18
- WordPress instance with WooCommerce and WPGraphQL plugin installed
- Stripe, PayPal, and Mailchimp accounts

## Setup

```bash
# install dependencies
yarn install
```

Configure environment variables by copying `template.env` to `.env` and filling in the required values.

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_WORDPRESS_URL` | WordPress site URL (production) |
| `NEXT_OPEN_WORDPRESS_URL` | WordPress site URL (local/fallback) |
| `CURRENT_URL` | Webshop base URL |
| `NEXT_PUBLIC_PAYPAL_CLIENT` | PayPal client ID |
| `NEXT_PUBLIC_PAYPAL_SECRET` | PayPal secret |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `NEXT_STRIPE_WEBHOOK_ENDPOINT_SECRET` | Stripe webhook secret |
| `WC_CONSUMER_KEY` | WooCommerce REST API consumer key |
| `WC_CONSUMER_SECRET` | WooCommerce REST API consumer secret |
| `MAILCHIMP_API_KEY` | Mailchimp API key |

## Available Scripts

| Script | Description |
|---|---|
| `yarn dev` | Start development server |
| `yarn build` | Build for production |
| `yarn export` | Export static site |
| `yarn start` | Start production server |
| `yarn svg` | Convert SVG icons to React components |

## Project Structure

```
pages/                   # Next.js pages and API routes
src/
  components/            # Reusable React components
    context/             # React context providers
    cart/                # Cart UI components
    single-product/      # Product detail components
    icons/               # SVG icon components
  queries/               # GraphQL queries
  mutations/             # GraphQL mutations
  utils/                 # Helper utilities
  lib/                   # Static data (country codes, EU list)
  image/                 # Image optimization utilities
public/                  # Static assets
wordpress/               # WordPress plugin config
tailwind.config.js       # Tailwind configuration
```

## Features

- Product listing by category/tag
- Product detail pages with gallery carousel
- Shopping cart sidebar
- Checkout with Stripe and PayPal
- Shipping rate calculation
- Coupon support
- Newsletter signup (Mailchimp)
- Blog posts
- Portfolio/gallery pages
- Responsive design

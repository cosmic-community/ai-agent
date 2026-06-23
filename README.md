# Digital Azency — AI Agent & Automation

![App Preview](https://imgix.cosmicjs.com/c340a2b0-6f3c-11f1-b7fe-27b51f9bc579-autopilot-photo-1451187580459-43490279c0fa-1782244218964.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A dark, futuristic agency website for **Digital Azency** — an AI agent and automation company. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com), it showcases your services, case studies, and client testimonials with a Batman/Hitman-style dark purple aesthetic designed to win premium clients.

## ✨ Features

- ⚡ **Cinematic dark-purple hero** with animated glow effects and clear CTAs
- 🤖 **Services showcase** with accent colors, benefits, and pricing
- 💼 **Case studies** with measurable results and key metrics
- 💬 **Client testimonials** with star ratings and photos
- ⚙️ **Site Settings driven** branding, CTAs, and contact info
- 📱 Fully responsive, accessible, and SEO-friendly
- 🎨 Glassmorphism cards, neon gradients, and smooth hover states

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a3ae322825872d1a7df41fb&clone_repository=6a3ae44e825872d1a7df4249)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: I run and AI agent in automation company named digital azency so what it will do is its create a i agents and automation we are the best AI agent in automation maker so I want you to help me with that my branding and marketing is literally zero I want you to make my agency the best and find me the best clients and make me money
>
> The user is rebuilding an existing website and provided these design notes: My agency has dark purple colour paltte futuristic vibe ,dark vibe hitman and batman style. Factor these preferences into the content structure."

### Code Generation Prompt

> Build a Next.js application for a website called "Ai agent". The content is managed in Cosmic CMS with the following object types: services, case-studies, testimonials, site-settings. Create a beautiful, modern, responsive design with a homepage and pages for each content type. I run and AI agent in automation company named digital azency... my branding and marketing is literally zero I want you to make my agency the best and find me the best clients and make me money. My agency has dark purple colour palette futuristic vibe, dark vibe hitman and batman style.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic SDK](https://www.cosmicjs.com/docs)

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with a bucket containing `services`, `case-studies`, `testimonials`, and `site-settings`

### Installation

```bash
bun install
bun run dev
```

Set your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`) in your hosting dashboard or a local `.env` file.

## 📦 Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch site settings (singleton)
const { object: settings } = await cosmic.objects
  .findOne({ type: 'site-settings', slug: 'site-settings' })
  .depth(1)
```

## 🌌 Cosmic CMS Integration

This app consumes four object types from your Cosmic bucket:

- **services** — service name, tagline, icon, benefits, pricing, accent color
- **case-studies** — challenge, solution, results, metrics, industry
- **testimonials** — client quote, rating, role, company, photo
- **site-settings** — agency name, hero copy, branding colors, CTA, contact info

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## ☁️ Deployment Options

- **Vercel** — recommended for Next.js. Connect your repo and add env vars.
- **Netlify** — supported with the Next.js runtime.

Set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your platform's dashboard.
<!-- README_END -->
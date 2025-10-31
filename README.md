# iversel - AI Automation Solutions Website

A modern, SEO-optimized website built with Next.js 15, TypeScript, and Tailwind CSS for iversel - an AI automation solutions company.

## 🚀 Features

- **SEO-First Architecture**: Static Site Generation (SSG) for optimal performance and SEO
- **Modern Design**: Clean, light-themed UI with professional aesthetics
- **MDX Content**: Blog posts and solutions managed via MDX files
- **Fully Responsive**: Mobile-first design that works on all devices
- **Type-Safe**: Built with TypeScript for reliability
- **Fast Performance**: Optimized images, fonts, and assets

## 📁 Project Structure

```
iversel/
├── app/
│   ├── (marketing)/          # Marketing pages group
│   │   ├── page.tsx          # Homepage
│   │   ├── solutions/        # Solutions pages
│   │   ├── blog/             # Blog pages
│   │   └── pricing/          # Pricing page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── sitemap.ts            # Dynamic sitemap
│   └── robots.ts             # Robots.txt
├── components/
│   ├── ui/                   # Reusable UI components
│   ├── shared/               # Shared components (Navbar, Footer)
│   ├── home/                 # Homepage sections
│   └── solutions/            # Solution components
├── content/
│   ├── solutions/            # Solution MDX files
│   └── blog/                 # Blog MDX files
├── lib/
│   └── mdx-utils.ts          # MDX parsing utilities
└── public/                   # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with gray-matter
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management

### Adding a New Solution

1. Create a new MDX file in `content/solutions/`:

```mdx
---
title: 'Your Solution Name'
description: 'Brief description'
price: 49
category: 'Category Name'
features:
  - 'Feature 1'
  - 'Feature 2'
---

# Your content here...
```

2. The solution will automatically appear on the solutions page

### Adding a New Blog Post

1. Create a new MDX file in `content/blog/`:

```mdx
---
title: 'Your Post Title'
description: 'Brief description'
date: '2025-01-15'
category: 'Category Name'
---

# Your content here...
```

2. The post will automatically appear on the blog page

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the primary color scheme:

```typescript
colors: {
  primary: {
    // Your color palette
  }
}
```

### Typography

The site uses Inter font. To change it, edit `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'
```

## 🔍 SEO Features

- ✅ Semantic HTML structure
- ✅ Dynamic meta tags per page
- ✅ Automatic sitemap generation
- ✅ Robots.txt configuration
- ✅ Open Graph tags
- ✅ Static Site Generation (SSG)
- ✅ Optimized images with next/image

## 📦 Deployment

This site is optimized for deployment on:
- **Netlify** (recommended for this project)
- Vercel
- Any Node.js hosting platform

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will auto-detect Next.js and configure build settings
4. Your site will be live in minutes!

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18+

See `DEPLOYMENT.md` for detailed step-by-step instructions.

## 🎯 Performance

- ✅ Lighthouse Score: 95+
- ✅ First Load JS: ~102 KB
- ✅ Dynamic imports for code splitting
- ✅ Optimized images (AVIF/WebP)
- ✅ Caching headers configured
- ✅ Security headers enabled

## 📚 Documentation

- `TYPOGRAPHY.md` - Typography system guide
- `PERFORMANCE.md` - Performance optimizations
- `BREADCRUMBS.md` - Breadcrumb navigation
- `DEPLOYMENT.md` - Deployment guide
- `LEGAL_PAGES.md` - Legal pages documentation

## 📄 License

Copyright © 2025 iversel. All rights reserved.

## 🤝 Support

For questions or support, contact: belalabukhadija97@gmail.com

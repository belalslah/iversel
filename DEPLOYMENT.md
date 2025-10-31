# Deployment Guide: GitHub → Netlify

## 📋 Prerequisites

- Git installed on your computer
- GitHub account
- Netlify account (free)

---

## Part 1: Upload to GitHub

### Step 1: Initialize Git Repository

Open terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: iversel website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in:
   - **Repository name**: `iversel` (or your preferred name)
   - **Description**: "AI Automation Solutions Website"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README (you already have one)
4. Click **"Create repository"**

### Step 3: Push to GitHub

GitHub will show you commands. Use these:

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/iversel.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

**✅ Your code is now on GitHub!**

---

## Part 2: Deploy to Netlify

### Step 1: Sign Up / Log In to Netlify

1. Go to [Netlify.com](https://www.netlify.com)
2. Click **"Sign up"** or **"Log in"**
3. Choose **"Sign up with GitHub"** (recommended)
4. Authorize Netlify to access your GitHub

### Step 2: Create New Site

1. Click **"Add new site"** → **"Import an existing project"**
2. Click **"Deploy with GitHub"**
3. Authorize Netlify (if prompted)
4. Search for your repository: **"iversel"**
5. Click on your repository

### Step 3: Configure Build Settings

Netlify will auto-detect Next.js. Verify these settings:

**Build Settings:**
- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: (leave default or set to 18+)

**Advanced Settings (Optional):**
- Click **"Show advanced"**
- Add environment variables if needed (see `.env.example`)

### Step 4: Deploy!

1. Click **"Deploy site"**
2. Wait 2-3 minutes for build to complete
3. Your site will be live at: `https://random-name-123456.netlify.app`

**✅ Your site is now live!**

---

## Part 3: Custom Domain (Optional)

### Option A: Use Netlify Subdomain

1. Go to **Site settings** → **Domain management**
2. Click **"Options"** → **"Edit site name"**
3. Change to: `iversel.netlify.app` (or your preferred name)

### Option B: Use Your Own Domain

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain: `iversel.com`
4. Follow DNS configuration instructions
5. Wait for DNS propagation (up to 48 hours)

**Netlify provides free SSL certificate automatically!**

---

## Part 4: Automatic Deployments

Every time you push to GitHub, Netlify will automatically:
1. Detect the changes
2. Build your site
3. Deploy the new version

**To update your site:**
```bash
# Make your changes
git add .
git commit -m "Your update message"
git push
```

Netlify will deploy automatically in 2-3 minutes!

---

## 🎯 Post-Deployment Checklist

### Immediate Tasks
- [ ] Visit your live site and test all pages
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify contact email works

### SEO Setup
- [ ] Update `NEXT_PUBLIC_SITE_URL` in Netlify environment variables
- [ ] Submit sitemap to Google Search Console: `https://yoursite.com/sitemap.xml`
- [ ] Submit to Bing Webmaster Tools
- [ ] Test with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Test with [Lighthouse](https://web.dev/measure/)

### Optional Enhancements
- [ ] Set up Netlify Analytics (paid)
- [ ] Add Google Analytics
- [ ] Set up contact form backend (Netlify Forms)
- [ ] Configure redirects if needed
- [ ] Set up branch deploys for testing

---

## 📊 Netlify Dashboard Overview

**Key Sections:**
- **Deploys**: View deployment history and logs
- **Site settings**: Configure domain, build settings
- **Domain management**: Custom domains and SSL
- **Environment variables**: Add secrets and config
- **Functions**: Serverless functions (if needed)
- **Forms**: Form submissions (if using Netlify Forms)

---

## 🔧 Troubleshooting

### Build Fails on Netlify

**Check build logs:**
1. Go to **Deploys** tab
2. Click on failed deploy
3. Read error messages

**Common issues:**
- Missing dependencies: Run `npm install` locally
- TypeScript errors: Run `npm run build` locally to test
- Environment variables: Add them in Netlify settings

### Site Not Updating

1. Check if deploy succeeded in Netlify dashboard
2. Clear browser cache (Ctrl+Shift+R)
3. Check if you pushed to correct branch
4. Verify build command is correct

### 404 Errors

- Next.js routes should work automatically
- Check file names match URLs
- Verify `_redirects` file if using custom redirects

---

## 📱 Testing Your Live Site

**Test these URLs:**
- Homepage: `https://yoursite.com/`
- Solutions: `https://yoursite.com/solutions`
- Blog: `https://yoursite.com/blog`
- Pricing: `https://yoursite.com/pricing`
- About: `https://yoursite.com/about`
- Contact: `https://yoursite.com/contact`

**Performance Tests:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Chrome DevTools Lighthouse

---

## 🚀 Quick Deploy to Vercel (Alternative)

If you prefer Vercel over Netlify:

1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Click **"Deploy"**

Vercel will auto-configure everything!

## Environment Variables

No environment variables are required for the basic setup. If you add external APIs or services, create a `.env.local` file:

```env
# Example
NEXT_PUBLIC_SITE_URL=https://iversel.com
```

## Custom Domain

### Vercel
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to "Domain settings"
2. Add custom domain
3. Configure DNS

## Performance Optimization

The site is already optimized with:
- ✅ Static Site Generation (SSG)
- ✅ Image optimization via next/image
- ✅ Font optimization
- ✅ Code splitting
- ✅ Minification

## SEO Checklist

Before going live:
- [ ] Update `baseUrl` in `app/sitemap.ts` to your actual domain
- [ ] Add Google Analytics (optional)
- [ ] Set up Google Search Console
- [ ] Submit sitemap to search engines
- [ ] Add social media meta images
- [ ] Test with Lighthouse

## Post-Deployment

1. **Test all pages**:
   - Homepage: /
   - Solutions: /solutions
   - Individual solutions: /solutions/[slug]
   - Blog: /blog
   - Individual posts: /blog/[slug]
   - Pricing: /pricing

2. **Verify SEO**:
   - Check sitemap: /sitemap.xml
   - Check robots.txt: /robots.txt
   - Run Lighthouse audit
   - Test meta tags with social media debuggers

3. **Monitor**:
   - Set up error tracking (e.g., Sentry)
   - Monitor Core Web Vitals
   - Track analytics

## Updating Content

### Add New Solution
1. Create `content/solutions/new-solution.mdx`
2. Add frontmatter and content
3. Commit and deploy
4. Solution automatically appears on site

### Add New Blog Post
1. Create `content/blog/new-post.mdx`
2. Add frontmatter and content
3. Commit and deploy
4. Post automatically appears on site

## Troubleshooting

### Build fails
- Run `npm run build` locally to see errors
- Check for TypeScript errors
- Verify all MDX files have valid frontmatter

### Images not loading
- Ensure images are in `public/` directory
- Use next/image component
- Check image paths are correct

### Slow performance
- Run Lighthouse audit
- Check bundle size: `npm run build`
- Optimize images
- Review third-party scripts

# Quick Start: Deploy to GitHub & Netlify

## 🚀 Step-by-Step Commands

### 1. Push to GitHub

```bash
# In your project folder (c:\Users\pixel\Desktop\iversel)

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: iversel website"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/iversel.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Deploy to Netlify

**Option A: Via Netlify Website (Easiest)**
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Select your `iversel` repository
5. Click "Deploy site"

**Option B: Via Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify init
```

---

## ✅ Checklist

Before pushing to GitHub:
- [x] .gitignore is configured
- [x] Build succeeds locally (`npm run build`)
- [x] All pages work (`npm run dev`)
- [x] README.md is complete

After deployment:
- [ ] Test live site
- [ ] Check all pages load
- [ ] Test mobile view
- [ ] Run Lighthouse audit

---

## 📝 Important Files

- `.gitignore` - Files to exclude from Git
- `.env.example` - Environment variables template
- `README.md` - Project documentation
- `DEPLOYMENT.md` - Full deployment guide
- `package.json` - Dependencies and scripts

---

## 🔗 Useful Links

- **GitHub**: https://github.com
- **Netlify**: https://www.netlify.com
- **Full Guide**: See `DEPLOYMENT.md`

---

## 💡 Tips

1. **Test locally first**: Always run `npm run build` before pushing
2. **Commit often**: Make small, frequent commits
3. **Use descriptive messages**: Write clear commit messages
4. **Check build logs**: If deploy fails, check Netlify logs

---

## 🆘 Need Help?

See `DEPLOYMENT.md` for detailed troubleshooting and full instructions.

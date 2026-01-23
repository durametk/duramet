# ⚡ Quick Start - Vercel Deployment

## 🚀 Fastest Way to Deploy

### Option 1: Using Vercel Dashboard (Easiest - Recommended)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Click **"Deploy"** (settings are auto-detected)
5. Add environment variable:
   - Go to **Settings** → **Environment Variables**
   - Add: `RESEND_API_KEY` = `your-api-key`
6. Redeploy

**That's it!** Your site is live.

---

### Option 2: Using Vercel CLI

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Set environment variable (in Dashboard)
# Go to: Settings → Environment Variables
# Add: RESEND_API_KEY

# 5. Redeploy
vercel --prod
```

---

## 🌐 Custom Domain Setup

1. Go to Vercel Dashboard → Your Project
2. **Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter: `duramettechnologies.com`
5. Add DNS records to GoDaddy (Vercel will provide them)
6. Wait for verification (5-30 minutes)

---

## ✅ That's It!

Your site will be live at:
- Vercel URL: `https://your-project.vercel.app`
- Custom Domain: `https://duramettechnologies.com` (after DNS setup)

---

## 🔄 Future Deployments

Just push to GitHub:
```bash
git push origin main
```

Vercel automatically deploys! 🎉

---

## 🆘 Troubleshooting

**Build fails?**
- Check build logs in Vercel Dashboard
- Test locally: `npm run build`

**Function not working?**
- Check environment variable is set
- Check function logs in Vercel Dashboard

**Need detailed instructions?** See `VERCEL_MIGRATION_GUIDE.md`

---

**That's it! Vercel is much simpler than Netlify!** 🚀


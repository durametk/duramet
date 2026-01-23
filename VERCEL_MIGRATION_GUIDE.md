# 🚀 Vercel Hosting Migration Guide

This guide will help you migrate your website from Netlify to Vercel.

## ✅ What's Been Set Up

- ✅ Vercel configuration file (`vercel.json`)
- ✅ API function in `api/send-email.ts` (already Vercel-compatible)
- ✅ Updated build scripts in `package.json`
- ✅ SPA routing configuration
- ✅ CORS headers for API endpoints

---

## 📋 Prerequisites

1. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
2. **Node.js** - Version 18 or higher
3. **npm** - Package manager
4. **GitHub Account** - Your code is already on GitHub

---

## 🚀 Step-by-Step Migration

### Step 1: Install Vercel CLI (Optional but Recommended)

```bash
npm install -g vercel
```

Or install locally:
```bash
npm install --save-dev vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

This will open a browser window for you to sign in with your Vercel account.

### Step 3: Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)

```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (first time)
- **What's your project's name?** → `duramet-technologies` (or your preferred name)
- **In which directory is your code located?** → `./` (current directory)
- **Want to override the settings?** → No

This will:
1. Deploy to a preview URL
2. Create a Vercel project
3. Set up automatic deployments from GitHub

#### Option B: Using Vercel Dashboard (Easier)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository:
   - Select your repository (`new-love` or your repo name)
   - Click **"Import"**
4. Configure project:
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - Click **"Deploy"**

### Step 4: Set Environment Variables

1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on **Settings** → **Environment Variables**
3. Add the following:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
   - **Environment**: Select all (Production, Preview, Development)
   - Click **"Save"**

**To get your Resend API Key:**
1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Make sure you're in the workspace where `duramettechnologies.com` is verified
3. Copy your API key

### Step 5: Redeploy After Setting Environment Variables

After adding environment variables, trigger a new deployment:

1. Go to **Deployments** tab
2. Click on the latest deployment
3. Click **"Redeploy"** → **"Use existing Build Cache"**

Or push a new commit to trigger automatic deployment.

### Step 6: Configure Custom Domain

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter: `duramettechnologies.com`
5. Follow the verification steps:
   - Vercel will provide DNS records
   - Add these records to GoDaddy
   - Wait for verification (usually 5-30 minutes)

---

## 🔧 DNS Configuration (GoDaddy)

After adding custom domain in Vercel, update DNS records in GoDaddy:

### Option 1: CNAME Record (Recommended)
- **Type**: CNAME
- **Name**: @
- **Value**: `cname.vercel-dns.com` (or the value Vercel provides)
- **TTL**: 3600

### Option 2: A Records
- **Type**: A
- **Name**: @
- **Value**: Vercel will provide IP addresses (usually 2-4 IPs)

**Note**: Vercel will provide exact DNS records during domain setup. Use those values.

---

## ✅ Verification

### Test Your Site:
1. Visit your Vercel deployment URL: `https://your-project.vercel.app`
2. Test the contact form
3. Verify emails are being sent
4. Check Vercel Function logs in the dashboard

### Check Function Logs:
1. Go to Vercel Dashboard → Your Project
2. Click **"Functions"** tab
3. Click on `api/send-email`
4. View logs and invocations

---

## 🔄 Deployment Workflow

### Automatic Deployments (Recommended):

Vercel automatically deploys when you push to GitHub:
1. **Push to `main` branch** → Deploys to production
2. **Push to other branches** → Creates preview deployment
3. **Pull requests** → Creates preview deployment

### Manual Deployment:

```bash
# Deploy to production
vercel --prod

# Or use npm script
npm run vercel:deploy
```

### Local Development:

```bash
# Run Vercel dev server (simulates production)
vercel dev

# Or use npm script
npm run vercel:dev
```

---

## 📊 Vercel vs Netlify Comparison

| Feature | Netlify (Free) | Vercel (Free/Hobby) |
|---------|---------------|---------------------|
| **Hosting** | ✅ 100 GB bandwidth | ✅ 100 GB bandwidth |
| **Build Minutes** | 300/month | ✅ 6,000 minutes/month |
| **Functions** | 125K invocations/month | ✅ 100 GB-hours/month |
| **Custom Domain** | ✅ Free | ✅ Free |
| **SSL** | ✅ Free | ✅ Free |
| **CDN** | ✅ Global CDN | ✅ Global CDN (Edge Network) |
| **Automatic Deployments** | ✅ From GitHub | ✅ From GitHub |
| **Preview Deployments** | ✅ Yes | ✅ Yes (per branch/PR) |
| **Pricing** | Free tier limited | More generous free tier |

**Vercel Hobby Plan (Free):**
- 100 GB bandwidth
- 6,000 build minutes/month
- 100 GB-hours serverless function execution
- Unlimited deployments
- Much more scalable than Netlify free tier

---

## 🛠️ Troubleshooting

### Issue: Build fails

**Solution:**
```bash
# Test build locally
npm run build

# Check build logs in Vercel Dashboard
```

### Issue: Environment variable not found

**Solution:**
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Verify `RESEND_API_KEY` is set
3. Make sure it's enabled for the correct environment (Production/Preview/Development)
4. Redeploy after adding variables

### Issue: Function not working

**Solution:**
1. Check function logs in Vercel Dashboard → Functions
2. Verify API endpoint: `/api/send-email`
3. Check CORS headers in `vercel.json`
4. Test locally: `vercel dev`

### Issue: Domain verification taking too long

**Solution:**
- Check DNS records are correct in GoDaddy
- Wait up to 24 hours for DNS propagation
- Check Vercel Dashboard for verification status
- Verify DNS records match exactly what Vercel provided

### Issue: CORS errors

**Solution:**
- CORS is already configured in `vercel.json`
- Make sure function is deployed
- Check function logs for errors
- Verify API endpoint is correct: `/api/send-email`

---

## 🔒 Security Notes

1. **Never commit API keys** to the repository
2. **Use Vercel Environment Variables** for sensitive data
3. **Environment variables** are encrypted in Vercel
4. **Access control** can be configured in Vercel Dashboard

---

## 📝 Important Files

- `vercel.json` - Vercel configuration
- `api/send-email.ts` - Serverless function for email
- `dist/` - Built website (auto-generated)
- `.vercel/` - Vercel project config (auto-generated, gitignored)

---

## 🆘 Need Help?

- **Vercel Documentation**: https://vercel.com/docs
- **Vercel Support**: Available in Dashboard
- **Community**: https://github.com/vercel/vercel/discussions

---

## ✅ Migration Checklist

- [ ] Vercel account created
- [ ] Vercel CLI installed (optional)
- [ ] Logged in to Vercel
- [ ] Project deployed to Vercel
- [ ] Resend API key added as environment variable
- [ ] Site tested and working
- [ ] Contact form tested
- [ ] Emails sending correctly
- [ ] Custom domain configured
- [ ] DNS records updated in GoDaddy
- [ ] Domain verified and SSL active
- [ ] Automatic deployments working from GitHub

---

## 🎯 Quick Deploy Commands

```bash
# First time setup
vercel login
vercel

# Set environment variable
# (Do this in Vercel Dashboard → Settings → Environment Variables)

# Deploy to production
vercel --prod

# Or just push to GitHub (auto-deploys)
git push origin main
```

---

**Last Updated**: [Current Date]  
**Status**: Ready for migration to Vercel


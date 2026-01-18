# 🚀 Deploy Backend to Railway (FREE & EASY!)

## Why Railway?

✅ **Free tier** - $5 credit/month  
✅ **Easy deployment** - Connect GitHub, auto-deploy  
✅ **Environment variables** - Easy to manage  
✅ **No credit card** needed for free tier  

## Step-by-Step Guide

### Step 1: Prepare Your Backend

Your `server.js` is already ready! ✅

### Step 2: Create Railway Account

1. Go to: https://railway.app
2. Sign up with GitHub
3. Click **"New Project"**

### Step 3: Deploy Backend

1. **Select**: "Deploy from GitHub repo"
2. **Choose**: Your repo (`Aniketchavan7/new-love`)
3. **Root Directory**: Leave empty (or set to `/` if needed)
4. **Build Command**: Leave empty (we're deploying Node.js directly)
5. **Start Command**: `node server.js`
6. Click **"Deploy"**

### Step 4: Set Environment Variable

1. In Railway dashboard, click on your service
2. Go to **"Variables"** tab
3. Click **"New Variable"**
4. Add:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (from https://resend.com/api-keys)
5. Click **"Add"**

### Step 5: Get Your Backend URL

1. Railway will give you a URL like: `https://your-app.up.railway.app`
2. Copy this URL

### Step 6: Update Frontend

Update `src/lib/email.ts`:

```typescript
export const EMAIL_API_ENDPOINT = "https://your-app.up.railway.app/api/send-email";
```

Replace `your-app.up.railway.app` with your actual Railway URL.

### Step 7: Deploy Frontend

Push changes to GitHub, Netlify will auto-deploy!

## ✅ That's It!

- Backend: Railway (handles email)
- Frontend: Netlify (your website)
- Email: Resend API (via backend)

## 🧪 Test

1. Visit your website
2. Submit contact form
3. Check `karthik.ramesh@duramettechnologies.com` for email!

## 💰 Cost

- **Railway**: Free tier ($5 credit/month - plenty for email API)
- **Netlify**: Free tier
- **Resend**: Free tier (100 emails/day)

**Total: $0/month!** 🎉


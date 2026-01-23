# 🚀 Vercel Deployment - Step-by-Step Guide

## Current Step: You're on the "New Project" Page

Follow these steps to complete your deployment:

---

## Step 1: Configure Project Settings

### ✅ Already Done:
- ✅ Repository: `durametk/duramet` (or your repo)
- ✅ Branch: `main`
- ✅ Framework: Vite (auto-detected)
- ✅ Root Directory: `./`

### ⚙️ Configure Build Settings:

1. **Click on "Build and Output Settings"** to expand it
2. Verify these settings (should be auto-detected):
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
3. If any are different, update them to match above

---

## Step 2: Set Environment Variables (CRITICAL!)

**This is the most important step!**

1. **Click on "Environment Variables"** to expand it
2. **Click "Add"** or the "+" button
3. Add the following variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
   - **Environments**: Select all three:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
4. **Click "Save"**

### 🔑 How to Get Your Resend API Key:

1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. **Important**: Make sure you're logged into the workspace where `duramettechnologies.com` is verified
3. Click on **"API Keys"** in the sidebar
4. Either:
   - Copy an existing API key, OR
   - Create a new one by clicking **"Create API Key"**
5. Copy the key (it starts with `re_`)

---

## Step 3: Deploy!

1. **Review all settings** one more time
2. **Click the big "Deploy" button** at the bottom
3. Wait for deployment to complete (usually 1-3 minutes)

---

## Step 4: After Deployment

### ✅ Verify Deployment:

1. Once deployment completes, you'll see:
   - ✅ A success message
   - ✅ Your site URL: `https://duramet.vercel.app` (or similar)

2. **Click on the URL** to visit your live site

3. **Test the contact form:**
   - Fill out and submit the form
   - Check if you receive the email at `karthik.ramesh@duramettechnologies.com`

### 🔍 Check Function Logs:

1. Go to your project in Vercel Dashboard
2. Click on **"Functions"** tab
3. Click on `api/send-email`
4. Check logs to see if emails are being sent

---

## Step 5: Add Custom Domain (Optional - Do Later)

### After your site is working:

1. Go to Vercel Dashboard → Your Project
2. Click **Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter: `duramettechnologies.com`
5. Follow the instructions:
   - Vercel will provide DNS records
   - Add them to GoDaddy
   - Wait for verification (5-30 minutes)

---

## ⚠️ Troubleshooting

### If Deployment Fails:

1. **Check build logs:**
   - Click on the failed deployment
   - Check the "Build Logs" tab
   - Look for error messages

2. **Common issues:**
   - **Build command wrong**: Should be `npm run build`
   - **Output directory wrong**: Should be `dist`
   - **Missing dependencies**: Check if `package.json` is correct

### If Contact Form Doesn't Work:

1. **Check environment variable:**
   - Go to Settings → Environment Variables
   - Verify `RESEND_API_KEY` is set
   - Make sure it's enabled for Production

2. **Redeploy after adding variable:**
   - Go to Deployments tab
   - Click on latest deployment
   - Click "Redeploy"

3. **Check function logs:**
   - Go to Functions tab
   - Click on `api/send-email`
   - Check for error messages

### If Emails Not Sending:

1. **Verify Resend API Key:**
   - Make sure the key is from the workspace where `duramettechnologies.com` is verified
   - Check Resend Dashboard → Domains → Verify domain is "Verified"

2. **Check function logs** in Vercel Dashboard

---

## ✅ Quick Checklist

Before clicking "Deploy", make sure:

- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Environment Variable `RESEND_API_KEY` is added
- [ ] Environment Variable is enabled for Production, Preview, and Development
- [ ] You have your Resend API key ready

---

## 🎯 After Successful Deployment

Your site will be live at:
- **Vercel URL**: `https://duramet.vercel.app` (or your project name)
- **Custom Domain**: `https://duramettechnologies.com` (after DNS setup)

---

## 📝 Next Steps After Deployment

1. ✅ Test your website
2. ✅ Test contact form
3. ✅ Verify emails are received
4. ✅ Add custom domain (when ready)
5. ✅ Update DNS in GoDaddy (when adding custom domain)

---

**You're all set! Click "Deploy" when ready!** 🚀


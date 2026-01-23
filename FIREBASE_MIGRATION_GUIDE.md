# 🚀 Firebase Hosting Migration Guide

This guide will help you migrate your website from Netlify to Firebase Hosting.

## ✅ What's Been Set Up

- ✅ Firebase configuration files (`firebase.json`, `.firebaserc`)
- ✅ Firebase Cloud Functions for email sending
- ✅ Updated build scripts in `package.json`
- ✅ SPA routing configuration
- ✅ CORS headers for API endpoints

---

## 📋 Prerequisites

1. **Google Account** - You'll need a Google account
2. **Node.js** - Version 18 or higher
3. **npm** - Package manager

---

## 🚀 Step-by-Step Migration

### Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

Or install locally (already added to devDependencies):
```bash
npm install
```

### Step 2: Login to Firebase

```bash
firebase login
```

This will open a browser window for you to sign in with your Google account.

### Step 3: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: `duramet-technologies` (or your preferred name)
4. Follow the setup wizard:
   - Disable Google Analytics (optional, you can enable later)
   - Click **"Create project"**
5. Wait for project creation to complete

### Step 4: Initialize Firebase in Your Project

```bash
firebase init
```

When prompted, select:
- ✅ **Hosting** - Configure files for Firebase Hosting
- ✅ **Functions** - Configure a Cloud Functions directory

Follow the prompts:
- **Select existing project** → Choose `duramet-technologies` (or your project name)
- **What do you want to use as your public directory?** → `dist`
- **Configure as a single-page app?** → **Yes**
- **Set up automatic builds and deploys with GitHub?** → **No** (we'll do manual deploys)
- **File dist/index.html already exists. Overwrite?** → **No**
- **What language would you like to use to write Cloud Functions?** → **TypeScript**
- **Do you want to use ESLint?** → **Yes**
- **Do you want to install dependencies now?** → **Yes**

### Step 5: Update Project ID in .firebaserc

If your project ID is different, update `.firebaserc`:

```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

### Step 6: Install Function Dependencies

```bash
cd functions
npm install
cd ..
```

### Step 7: Set Environment Variables (Resend API Key)

Set the Resend API key as a Firebase config:

```bash
firebase functions:config:set resend.api_key="YOUR_RESEND_API_KEY"
```

**To get your Resend API Key:**
1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Make sure you're in the workspace where `duramettechnologies.com` is verified
3. Copy your API key (starts with `re_`)

### Step 8: Build Your Project

```bash
npm run build
```

This creates the `dist` folder with your production build.

### Step 9: Deploy to Firebase

**Deploy everything (hosting + functions):**
```bash
npm run firebase:deploy:all
```

Or deploy separately:
```bash
# Deploy hosting only
npm run firebase:deploy

# Deploy functions only
cd functions
npm run deploy
cd ..
```

### Step 10: Configure Custom Domain

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Hosting** → **Add custom domain**
4. Enter: `duramettechnologies.com`
5. Follow the verification steps:
   - Add the provided DNS records to GoDaddy
   - Wait for verification (can take a few minutes to 24 hours)
6. SSL certificate will be automatically provisioned

---

## 🔧 DNS Configuration (GoDaddy)

After adding custom domain in Firebase, you'll need to update DNS records in GoDaddy:

### Option 1: A Records (Recommended)
- **Type**: A
- **Name**: @
- **Value**: Firebase will provide IP addresses (usually 2-4 IPs)
- **TTL**: 3600

### Option 2: CNAME Record
- **Type**: CNAME
- **Name**: @
- **Value**: Firebase hosting URL (e.g., `your-project.web.app`)

**Note**: Firebase will provide exact DNS records during domain setup.

---

## ✅ Verification

### Test Your Site:
1. Visit your Firebase hosting URL: `https://your-project-id.web.app`
2. Test the contact form
3. Verify emails are being sent
4. Check Firebase Functions logs in the console

### Check Function Logs:
```bash
firebase functions:log
```

Or in Firebase Console:
- Go to **Functions** → Select `sendEmail` → **Logs**

---

## 🔄 Deployment Workflow

### For Future Updates:

1. **Make your changes** to the code
2. **Build the project:**
   ```bash
   npm run build
   ```
3. **Deploy:**
   ```bash
   npm run firebase:deploy:all
   ```

### Quick Deploy Script:
You can also use your existing `push-changes.bat` but add Firebase deploy at the end, or create a new script.

---

## 📊 Firebase vs Netlify Comparison

| Feature | Netlify (Free) | Firebase (Free/Blaze) |
|---------|---------------|----------------------|
| **Hosting** | ✅ 100 GB bandwidth | ✅ 10 GB storage, 360 MB/day transfer |
| **Build Minutes** | 300/month | ✅ Unlimited (pay per use) |
| **Functions** | 125K invocations/month | ✅ 2M invocations/month (free tier) |
| **Custom Domain** | ✅ Free | ✅ Free |
| **SSL** | ✅ Free | ✅ Free |
| **CDN** | ✅ Global CDN | ✅ Global CDN |
| **Pricing** | Free tier limited | Pay-as-you-go (very affordable) |

**Firebase Blaze Plan (Pay-as-you-go):**
- Free tier includes generous limits
- Only pay for what you use beyond free tier
- Much more scalable than Netlify free tier

---

## 🛠️ Troubleshooting

### Issue: Function deployment fails

**Solution:**
```bash
cd functions
npm install
npm run build
cd ..
firebase deploy --only functions
```

### Issue: Environment variable not found

**Solution:**
```bash
# Set the config again
firebase functions:config:set resend.api_key="YOUR_API_KEY"

# Redeploy functions
firebase deploy --only functions
```

### Issue: Domain verification taking too long

**Solution:**
- Check DNS records are correct in GoDaddy
- Wait up to 24 hours for propagation
- Check Firebase Console for verification status

### Issue: CORS errors

**Solution:**
- CORS is already configured in `firebase.json`
- Make sure function is deployed: `firebase deploy --only functions`
- Check function logs for errors

---

## 🔒 Security Notes

1. **Never commit API keys** to the repository
2. **Use Firebase config** for sensitive data: `firebase functions:config:set`
3. **Environment variables** are encrypted in Firebase
4. **Access control** can be configured in Firebase Console

---

## 📝 Important Files

- `firebase.json` - Firebase configuration
- `.firebaserc` - Project ID configuration
- `functions/src/index.ts` - Cloud Functions code
- `functions/package.json` - Function dependencies
- `dist/` - Built website (auto-generated)

---

## 🆘 Need Help?

- **Firebase Documentation**: https://firebase.google.com/docs
- **Firebase Hosting**: https://firebase.google.com/docs/hosting
- **Cloud Functions**: https://firebase.google.com/docs/functions
- **Firebase Support**: Available in Firebase Console

---

## ✅ Migration Checklist

- [ ] Firebase CLI installed
- [ ] Logged in to Firebase
- [ ] Firebase project created
- [ ] Firebase initialized in project
- [ ] Function dependencies installed
- [ ] Resend API key configured
- [ ] Project built successfully
- [ ] Deployed to Firebase
- [ ] Custom domain configured
- [ ] DNS records updated in GoDaddy
- [ ] Site tested and working
- [ ] Contact form tested
- [ ] Emails sending correctly

---

**Last Updated**: [Current Date]  
**Status**: Ready for migration


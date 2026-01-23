# ⚡ Quick Start - Firebase Deployment

## 🚀 Fastest Way to Deploy

### Option 1: Using the Batch Script (Windows)

```bash
.\deploy-firebase.bat
```

### Option 2: Manual Commands

```bash
# 1. Build the project
npm run build

# 2. Deploy to Firebase
firebase deploy
```

---

## 📋 First-Time Setup (One-Time Only)

### 1. Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. Login

```bash
firebase login
```

### 3. Initialize (if not done already)

```bash
firebase init
```

Select:
- ✅ Hosting
- ✅ Functions

### 4. Set Resend API Key

```bash
firebase functions:config:set resend.api_key="YOUR_RESEND_API_KEY"
```

### 5. Install Function Dependencies

```bash
cd functions
npm install
cd ..
```

---

## 🔄 Regular Deployments

After initial setup, just run:

```bash
.\deploy-firebase.bat
```

Or:

```bash
npm run firebase:deploy:all
```

---

## 🌐 Custom Domain Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. **Hosting** → **Add custom domain**
4. Enter: `duramettechnologies.com`
5. Add DNS records to GoDaddy (Firebase will provide them)
6. Wait for verification (5 minutes to 24 hours)

---

## ✅ That's It!

Your site will be live at:
- Firebase URL: `https://your-project-id.web.app`
- Custom Domain: `https://duramettechnologies.com` (after DNS setup)

---

## 🆘 Troubleshooting

**Build fails?**
```bash
npm install
npm run build
```

**Deploy fails?**
```bash
firebase login
firebase deploy
```

**Functions not working?**
```bash
cd functions
npm install
npm run build
cd ..
firebase deploy --only functions
```

---

**Need detailed instructions?** See `FIREBASE_MIGRATION_GUIDE.md`


# ⚡ Quick Fix - Two Options

## Option 1: Use Netlify Functions (Easier - No Separate Backend)

### Find Environment Variables in Netlify:

1. Go to: https://app.netlify.com
2. Click your site: **duramet-test**
3. Click **gear icon** ⚙️ (top right) → **Site settings**
4. Left sidebar → **Environment variables**
5. Add/Edit `RESEND_API_KEY` with your Resend API key
6. **Redeploy** → Deploys → Trigger deploy

**Done!** Your Netlify Function will use the API key.

---

## Option 2: Deploy Separate Backend (More Control)

### Quick Steps:

1. **Deploy `server.js` to Railway** (free):
   - Go to: https://railway.app
   - Connect GitHub repo
   - Set start command: `node server.js`
   - Add `RESEND_API_KEY` environment variable
   - Get your backend URL

2. **Update frontend**:
   - Edit `src/lib/email.ts`
   - Change `EMAIL_API_ENDPOINT` to your Railway URL

3. **Deploy frontend**:
   - Push to GitHub
   - Netlify auto-deploys

**Done!** Backend handles emails separately.

---

## 🎯 Which Should You Choose?

- **Option 1**: Faster, everything in Netlify
- **Option 2**: More control, separate backend

Both work! Choose what's easier for you. 🚀


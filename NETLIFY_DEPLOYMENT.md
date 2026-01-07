# Netlify Deployment Guide

## Step-by-Step Instructions to Deploy to Netlify

### Prerequisites
- GitHub account with your code pushed to the repository
- Netlify account (sign up at https://www.netlify.com)

---

## Method 1: Deploy via Netlify Dashboard (Recommended)

### Step 1: Connect Your Repository
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"** and authorize Netlify to access your repositories
4. Select your repository: `Aniketchavan7/new-love`
5. Click **"Import"**

### Step 2: Configure Build Settings
Netlify should auto-detect the settings, but verify:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Base directory**: (leave empty)

These settings are already configured in `netlify.toml`, so Netlify will use them automatically.

### Step 3: Set Environment Variables
1. In the **"Site configuration"** section, click **"Environment variables"**
2. Click **"Add variable"**
3. Add the following:
   - **Key**: `RESEND_API_KEY`
   - **Value**: `re_HRy7egPF_pBKnUwmUBmFybZ31UunB8j2V`
4. Click **"Save"**

### Step 4: Deploy
1. Click **"Deploy site"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Once deployed, you'll get a URL like: `https://your-site-name.netlify.app`

### Step 5: Update Frontend API Endpoint (If Needed)
The frontend code in `src/lib/email.ts` uses `/api/send-email`, which will automatically work with Netlify Functions at `/.netlify/functions/send-email`.

However, you may need to update the endpoint. Check if it works first, and if not, we'll update it.

---

## Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```
This will open your browser to authenticate.

### Step 3: Initialize Site
```bash
netlify init
```
Follow the prompts:
- Create & configure a new site
- Choose your team
- Site name (or use auto-generated)

### Step 4: Set Environment Variable
```bash
netlify env:set RESEND_API_KEY "re_HRy7egPF_pBKnUwmUBmFybZ31UunB8j2V"
```

### Step 5: Deploy
```bash
netlify deploy --prod
```

---

## Important Notes

### Automatic Deployment
**Yes, changes will automatically reflect on Netlify!** 

If you connected your GitHub repository to Netlify:
- **Every push to your main/master branch** will automatically trigger a new deployment
- Netlify will rebuild and redeploy your site automatically
- You can see deployment status in the Netlify dashboard
- Build time is usually 2-3 minutes

**To deploy changes:**
1. Make your changes locally
2. Commit: `git add .` then `git commit -m "Your message"`
3. Push: `git push origin main`
4. Netlify will automatically detect the push and start deploying

You can also manually trigger deployments from the Netlify dashboard if needed.

### Serverless Functions
- Netlify Functions are located in `netlify/functions/`
- The function `send-email.ts` will be available at: `/.netlify/functions/send-email`
- Netlify automatically handles TypeScript compilation

### API Endpoint
The frontend calls `/api/send-email`, but Netlify Functions are at `/.netlify/functions/send-email`.

**Option 1**: Update `netlify.toml` to add a redirect:
```toml
[[redirects]]
  from = "/api/send-email"
  to = "/.netlify/functions/send-email"
  status = 200
```

**Option 2**: Update `src/lib/email.ts` to use:
```typescript
export const EMAIL_API_ENDPOINT = "/.netlify/functions/send-email";
```

I recommend **Option 1** (adding redirect) so the frontend code doesn't need changes.

### Custom Domain (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the DNS configuration instructions

---

## Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version (should be 18+)

### Functions Not Working
- Check that `netlify/functions/send-email.ts` exists
- Verify environment variable is set
- Check function logs in Netlify dashboard under **Functions**

### Images Not Loading
- Ensure `public/logo/` folder is included in the build
- Check that image paths use `/logo/...` (absolute paths)

### Email Not Sending
- Verify `RESEND_API_KEY` environment variable is set
- Check function logs for errors
- Ensure Resend API key is valid

---

## Quick Checklist

- [ ] Code pushed to GitHub
- [ ] Netlify account created
- [ ] Repository connected to Netlify
- [ ] Build settings configured (auto-detected from `netlify.toml`)
- [ ] Environment variable `RESEND_API_KEY` set
- [ ] Site deployed successfully
- [ ] Test contact form submission
- [ ] Verify emails are received

---

## After Deployment

1. **Test the contact form** on your live site
2. **Check function logs** in Netlify dashboard if emails aren't sending
3. **Update API endpoint** in `src/lib/email.ts` if needed (or use redirect in `netlify.toml`)
4. **Set up custom domain** if desired

Your site should now be live! 🚀


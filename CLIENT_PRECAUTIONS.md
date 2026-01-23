# ⚠️ Client Precautions & Hosting Information

## 📋 Website Hosting Overview

Your Duramet Technologies website is hosted using the following infrastructure:

### Hosting Platform
- **Platform**: Netlify
- **Deployment Method**: Automatic deployment from GitHub
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18

### DNS & Domain
- **DNS Provider**: GoDaddy
- **Domain**: duramettechnologies.com
- **Email Domain**: noreply@duramettechnologies.com

### Email Service
- **Service**: Resend API
- **Recipient Email**: karthik.ramesh@duramettechnologies.com
- **From Email**: noreply@duramettechnologies.com

### Repository
- **Platform**: GitHub (Private Repository)
- **Branch**: `main` (auto-deploys to production)
- **Auto-Deploy**: Enabled - Any push to `main` branch automatically deploys

---

## 🚨 CRITICAL: What You Should NOT Do

### ❌ **DO NOT Modify These Files Without Developer Approval**

1. **`netlify.toml`**
   - This file controls the entire deployment configuration
   - Changing this can break your website deployment
   - Contains build settings, redirects, and function configurations

2. **`netlify/functions/send-email.ts`**
   - This is the email sending function
   - Modifying this incorrectly can break contact form functionality
   - Contains API key references and email logic

3. **`package.json`**
   - Contains all project dependencies
   - Removing or modifying dependencies can break the build
   - Only modify if you understand npm dependencies

4. **`vite.config.ts`**
   - Build configuration file
   - Changes can break the development or production build

5. **`netlify.toml` and Environment Variables**
   - Never commit API keys or secrets to the repository
   - API keys should only be set in Netlify Dashboard → Site Settings → Environment Variables

### ❌ **DO NOT Push Directly to Main Branch**

- **Always test changes locally first** before pushing
- Use feature branches for testing
- The `main` branch automatically deploys to production
- A broken push to `main` will break your live website

### ❌ **DO NOT Modify DNS Settings Without Understanding**

- DNS is managed through GoDaddy
- Incorrect DNS changes can make your website unreachable
- Always consult with your developer before making DNS changes

### ❌ **DO NOT Delete or Modify Environment Variables in Netlify**

- Go to: Netlify Dashboard → Your Site → Site Settings → Environment Variables
- The `RESEND_API_KEY` environment variable is critical for email functionality
- Deleting or changing it will break contact form emails
- Only modify if you have a new valid API key from Resend
- **See `SETUP_ENVIRONMENT_VARIABLES.md` for detailed setup instructions**

### ❌ **DO NOT Commit Sensitive Information**

- Never commit API keys, passwords, or secrets to the repository
- If you accidentally commit sensitive data, notify your developer immediately
- They will need to rotate the keys and remove them from git history

### ❌ **DO NOT Modify the Build Process**

- Don't change `npm run build` command
- Don't modify the `dist` folder manually (it's auto-generated)
- Don't delete `node_modules` folder

### ❌ **DO NOT Change Email Configuration Without Verification**

- The email service uses Resend API
- The domain `duramettechnologies.com` must be verified in Resend
- Changing email addresses or API keys requires domain verification
- Contact your developer if you need to change email settings

---

## ✅ Safe Actions You CAN Take

### ✅ **Content Updates**
- Update text content in component files (`.tsx` files in `src/components/`)
- Modify images in `public/` or `src/assets/` folders
- Update brochure PDFs in `public/brochures/`
- Change company information, contact details, etc.

### ✅ **Styling Changes**
- Modify Tailwind CSS classes in component files
- Update colors, fonts, spacing (if you understand Tailwind)

### ✅ **Using the Push Script**
- You can use `push-changes.bat` to commit and push changes
- **BUT**: Always test locally first with `npm run dev`
- **BUT**: Make sure changes don't break the build

---

## 🔧 How Deployment Works

1. **You make changes** to files in the repository
2. **You commit and push** to GitHub (using `push-changes.bat` or git commands)
3. **Netlify detects** the push to `main` branch
4. **Netlify automatically**:
   - Runs `npm install` to install dependencies
   - Runs `npm run build` to build the website
   - Deploys the `dist` folder to production
   - Your website is live within 1-2 minutes

### ⚠️ Important Notes:
- **Build failures** will prevent deployment
- **Check Netlify Dashboard** for deployment status
- **Failed builds** will show error messages in Netlify logs

---

## 🛡️ Security Best Practices

1. **Keep GitHub Repository Private**
   - Never make the repository public
   - Only authorized team members should have access

2. **Protect API Keys**
   - API keys are stored in Netlify Environment Variables (not in code)
   - Never share API keys or commit them to the repository
   - If an API key is exposed, rotate it immediately

3. **Regular Backups**
   - Your code is backed up in GitHub
   - Netlify keeps deployment history
   - Consider backing up important content separately

4. **Monitor Deployments**
   - Check Netlify Dashboard regularly
   - Review deployment logs if something breaks
   - Test the website after each deployment

---

## 📧 Email Functionality

### How Contact Forms Work:
1. User fills out contact form on website
2. Form sends data to `/api/send-email` endpoint
3. Netlify Function (`send-email.ts`) processes the request
4. Email is sent via Resend API to `karthik.ramesh@duramettechnologies.com`
5. Auto-reply is sent to the user

### If Emails Stop Working:
1. Check Netlify Dashboard → Functions → Logs
2. Verify `RESEND_API_KEY` environment variable is set
3. Check Resend Dashboard for API key status
4. Verify domain `duramettechnologies.com` is verified in Resend
5. Contact your developer if issues persist

---

## 🆘 When to Contact Your Developer

Contact your developer immediately if:

- ✅ Website is down or not loading
- ✅ Contact form is not sending emails
- ✅ Build/deployment fails in Netlify
- ✅ You accidentally deleted or modified critical files
- ✅ You need to change API keys or environment variables
- ✅ You need to modify DNS settings
- ✅ You want to add new features or functionality
- ✅ You see error messages you don't understand

---

## 📝 Quick Reference

### Important Files:
- `netlify.toml` - Deployment configuration (DO NOT MODIFY)
- `netlify/functions/send-email.ts` - Email function (DO NOT MODIFY)
- `package.json` - Dependencies (DO NOT MODIFY)
- `src/components/` - Safe to modify for content/styling
- `public/` - Safe to modify (images, PDFs, etc.)

### Important URLs:
- **Netlify Dashboard**: https://app.netlify.com
- **GitHub Repository**: (Your private repo URL)
- **Resend Dashboard**: https://resend.com
- **GoDaddy DNS**: (Your GoDaddy account)

### Important Documentation:
- **`CLIENT_PRECAUTIONS.md`** - This file (precautions and hosting info)
- **`SETUP_ENVIRONMENT_VARIABLES.md`** - Guide for setting up environment variables in Netlify

### Commands:
- `npm run dev` - Test website locally
- `npm run build` - Build for production (test)
- `push-changes.bat` - Commit and push changes (use carefully!)

---

## ⚠️ Final Reminder

**When in doubt, ask your developer first!**

It's better to ask than to break something. Your developer can:
- Review changes before you push
- Help you test locally
- Fix issues if something breaks
- Guide you on safe modifications

---

**Last Updated**: [Current Date]  
**Maintained By**: Your Development Team


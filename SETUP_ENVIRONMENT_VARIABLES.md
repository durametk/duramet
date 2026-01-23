# 🔧 Setting Up Environment Variables in Netlify

This guide will help you add the required environment variables to your Netlify site.

## 📋 Required Environment Variables

Your website requires the following environment variable:

### `RESEND_API_KEY`
- **Purpose**: API key for Resend email service (used for contact form emails)
- **Required**: Yes (critical for email functionality)
- **Where to get it**: Resend Dashboard → API Keys

---

## 🚀 Step-by-Step Instructions

### Step 1: Get Your Resend API Key

1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. **Important**: Make sure you're in the workspace where `duramettechnologies.com` is verified
3. Click on **"API Keys"** in the sidebar
4. Either:
   - **Use an existing API key** (if you have one)
   - **Create a new API key** by clicking "Create API Key"
5. Copy the API key (it starts with `re_`)

⚠️ **Critical**: The API key MUST be from the same Resend workspace where `duramettechnologies.com` domain is verified!

### Step 2: Add Environment Variable in Netlify

1. **Log in to Netlify**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Sign in with your account

2. **Navigate to Your Site**
   - Click on your site name (Duramet Technologies website)

3. **Go to Site Settings**
   - Click on **"Site configuration"** in the left sidebar
   - Or click on **"Site settings"** → **"Environment variables"**

4. **Add Environment Variable**
   - Click on **"Add a variable"** or **"Add variable"** button
   - In the **"Key"** field, enter: `RESEND_API_KEY`
   - In the **"Value"** field, paste your Resend API key
   - **Scope**: Select **"All scopes"** (or "Production" if you only want it for production)
   - Click **"Save"** or **"Add variable"**

5. **Verify the Variable**
   - You should see `RESEND_API_KEY` listed in the environment variables table
   - Make sure it shows the correct scope

### Step 3: Redeploy Your Site

After adding the environment variable, you need to trigger a new deployment:

1. **Option A: Trigger Redeploy**
   - Go to **"Deploys"** tab in Netlify
   - Click on the latest deployment
   - Click **"Trigger deploy"** → **"Clear cache and deploy site"**

2. **Option B: Push a New Commit**
   - Make a small change (or just push an empty commit)
   - This will trigger automatic deployment with the new environment variable

### Step 4: Verify It's Working

1. **Test the Contact Form**
   - Go to your live website
   - Fill out and submit the contact form
   - Check if you receive the email at `karthik.ramesh@duramettechnologies.com`

2. **Check Netlify Function Logs**
   - Go to Netlify Dashboard → Your Site → **"Functions"** tab
   - Click on `send-email` function
   - Check the logs to see if emails are being sent successfully

---

## 🔍 Troubleshooting

### Issue: Emails Still Not Working

1. **Verify API Key is Correct**
   - Double-check the API key in Netlify matches the one in Resend
   - Make sure it's from the workspace where domain is verified

2. **Check Function Logs**
   - Go to Netlify → Functions → `send-email` → Logs
   - Look for error messages
   - Common error: "Domain is not verified" means API key is from wrong workspace

3. **Verify Domain in Resend**
   - Go to Resend Dashboard → Domains
   - Make sure `duramettechnologies.com` shows as "Verified"
   - If not verified, you need to verify it first

4. **Check Environment Variable Scope**
   - Make sure `RESEND_API_KEY` is set for "Production" or "All scopes"
   - If it's only set for "Development", it won't work in production

### Issue: Environment Variable Not Found

1. **Redeploy the Site**
   - Environment variables are only available after redeployment
   - Trigger a new deployment after adding variables

2. **Check Variable Name**
   - Make sure it's exactly `RESEND_API_KEY` (case-sensitive)
   - No spaces or extra characters

3. **Clear Build Cache**
   - When redeploying, use "Clear cache and deploy site"
   - This ensures fresh build with new environment variables

---

## 📝 Environment Variable Details

### Current Configuration

- **Variable Name**: `RESEND_API_KEY`
- **Used In**: 
  - `netlify/functions/send-email.ts` (production)
  - `server.js` (local development)
  - `api/send-email.ts` (alternative endpoint)

### Fallback Behavior

If `RESEND_API_KEY` is not set, the code will use a hardcoded fallback key. However, **this is not recommended** because:
- The fallback key might not have access to your verified domain
- It's less secure
- It can break if the key is rotated

**Always use environment variables in production!**

---

## 🔒 Security Best Practices

1. **Never Commit API Keys**
   - API keys should NEVER be committed to Git
   - They should only exist in Netlify Environment Variables

2. **Rotate Keys Regularly**
   - Periodically rotate your API keys for security
   - Update the environment variable in Netlify when rotating

3. **Use Different Keys for Different Environments**
   - You can set different values for "Production" and "Development" scopes
   - This allows testing without affecting production

4. **Limit API Key Permissions**
   - In Resend, you can create API keys with limited permissions
   - Use the minimum permissions needed

---

## ✅ Verification Checklist

After setting up environment variables, verify:

- [ ] `RESEND_API_KEY` is added in Netlify Environment Variables
- [ ] Variable is set for the correct scope (Production/All)
- [ ] Site has been redeployed after adding the variable
- [ ] Contact form sends emails successfully
- [ ] No errors in Netlify Function logs
- [ ] Domain is verified in Resend Dashboard
- [ ] API key is from the correct Resend workspace

---

## 🆘 Need Help?

If you encounter issues:

1. **Check Netlify Function Logs** for error messages
2. **Verify Resend Dashboard** - domain verification and API key
3. **Contact Your Developer** if problems persist

---

## 📚 Additional Resources

- [Netlify Environment Variables Documentation](https://docs.netlify.com/environment-variables/overview/)
- [Resend API Keys Documentation](https://resend.com/docs/api-reference/api-keys)
- [Resend Domain Verification](https://resend.com/docs/dashboard/domains/introduction)

---

**Last Updated**: [Current Date]  
**Maintained By**: Your Development Team


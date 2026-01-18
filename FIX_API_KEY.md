# 🔑 Fix API Key Issue

## Problem
Domain is verified in Resend, but form shows error: "domain is not verified"
This means the API key in Netlify doesn't match the Resend account where domain is verified.

## ✅ Solution

### Step 1: Get Your Resend API Key

1. Go to: https://resend.com/api-keys
2. Find your API key (or create a new one)
3. Copy the API key (starts with `re_...`)

**Important:** Make sure this API key is from the same Resend account where `duramettechnologies.com` is verified!

### Step 2: Update API Key in Netlify

1. Go to: https://app.netlify.com
2. Click on your site
3. Go to: **Site settings** → **Environment variables**
4. Find `RESEND_API_KEY` (or add it if it doesn't exist)
5. Update the value with your correct API key
6. Click **Save**

### Step 3: Redeploy

After updating the environment variable:
1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Deploy site**
3. Wait for deployment to complete

### Step 4: Test

1. Visit your website
2. Submit the contact form
3. Should work now! ✅

## 🔍 How to Verify

- The API key should be from the Resend account where you see `duramettechnologies.com` as "Verified"
- Check the email associated with the Resend account - it should match where domain is verified

## ⚠️ Important Notes

- The hardcoded API key in code (`re_HRy7egPF_pBKnUwmUBmFybZ31UunB8j2V`) is just a fallback
- Netlify uses the environment variable `RESEND_API_KEY` first
- Make sure the environment variable has the correct API key!


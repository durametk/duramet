# 🔍 Where to Find Environment Variables in Netlify

## Step-by-Step Guide

### Method 1: From Project Overview

1. **Go to**: https://app.netlify.com
2. **Click** on your site: `duramet-test`
3. **In the left sidebar**, look for:
   - **"Project configuration"** → Click it
   - Then click **"Environment variables"**

### Method 2: From Site Settings

1. **Go to**: https://app.netlify.com
2. **Click** on your site: `duramet-test`
3. **Top right corner**: Click the **gear icon** ⚙️ (Site settings)
4. **Left sidebar**: Click **"Environment variables"**

### Method 3: Direct URL

Go directly to:
```
https://app.netlify.com/sites/duramet-test/configuration/env
```
(Replace `duramet-test` with your actual site name)

## What You'll See

- List of all environment variables
- **Add variable** button
- Edit/Delete options for each variable

## Add/Update RESEND_API_KEY

1. Click **"Add variable"** (or edit if it exists)
2. **Key**: `RESEND_API_KEY`
3. **Value**: Your Resend API key (starts with `re_...`)
4. **Scopes**: Select all (Production, Deploy previews, Branch deploys)
5. Click **"Save"**

## After Adding

- **Redeploy** your site for changes to take effect
- Go to **Deploys** → **Trigger deploy**


# 🔑 API Key Issue - Domain Not Verified

## ⚠️ Problem

Resend API says: "The duramettechnologies.com domain is not verified"

**This means:** The API key `re_2dz3tHHJ_HGwXiSLcCfR924BFyk8TqFit` doesn't have access to the verified domain.

## 🔍 Why This Happens

Even if you're logged into the same Resend account, the API key might be:
1. **From a different workspace** - Resend has workspaces, API keys are workspace-specific
2. **From a different account** - Multiple Resend accounts possible
3. **Needs regeneration** - Old API key might not have domain access

## ✅ Solution

### Step 1: Verify API Key Location

1. Go to: https://resend.com/api-keys
2. **Check the workspace** - Look at top left, make sure you're in the workspace where `duramettechnologies.com` is verified
3. **Find the API key** that matches `re_2dz3tHHJ_HGwXiSLcCfR924BFyk8TqFit`
4. **If not found** - The API key is from a different workspace/account

### Step 2: Get Correct API Key

**Option A: Use Existing Key from Verified Workspace**
1. Go to the workspace where domain is verified
2. Go to API Keys
3. Copy the API key from that workspace

**Option B: Create New API Key**
1. In the workspace where domain is verified
2. Create a new API key
3. Copy it

### Step 3: Update Code

Update these files with the correct API key:

1. `netlify/functions/send-email.ts` - Line 5
2. `api/send-email.ts` - Line 6
3. `server.js` - Line 9

Replace: `re_2dz3tHHJ_HGwXiSLcCfR924BFyk8TqFit`

With: The API key from the workspace where domain is verified

### Step 4: Deploy

```bash
git add .
git commit -m "Update to correct Resend API key"
git push origin main
```

## 🎯 Quick Check

**In Resend Dashboard:**
1. Check which workspace you're in (top left)
2. Verify `duramettechnologies.com` shows "Verified" in THAT workspace
3. Get API key from THAT same workspace

The API key MUST be from the exact same workspace where the domain is verified!

## ✅ After Fix

Once you use the API key from the verified workspace, the form will work! 🎉


# 🔍 Debug Steps - Domain Verification Error

## Current Issue

Still getting "domain is not verified" error even though:
- ✅ Domain IS verified in Resend
- ✅ API key IS from the same account

## 🔍 Debug Steps

### Step 1: Check Netlify Function Logs

1. Go to: https://app.netlify.com
2. Click your site: **duramet-test**
3. Go to **Functions** tab
4. Click on **send-email** function
5. Click **Logs** tab
6. Look for error messages - they'll show:
   - Which API key is being used (env var or hardcoded)
   - The exact Resend error
   - Debug information

### Step 2: Verify API Key in Code Matches Resend

1. Go to: https://resend.com/api-keys
2. Find the API key from the account where domain is verified
3. Compare with code:
   - `netlify/functions/send-email.ts` - Line 5
   - Current: `re_2dz3tHHJ_HGwXiSLcCfR924BFyk8TqFit`
4. If different, update the code

### Step 3: Check if Function is Deployed

1. Go to Netlify → **Deploys** tab
2. Check latest deploy - does it show the function deployed?
3. Look for: "1 function deployed" or similar

### Step 4: Clear Cache & Test

1. Hard refresh browser: Ctrl+Shift+R (or Cmd+Shift+R)
2. Clear browser cache
3. Test form again

### Step 5: Check Resend Dashboard

1. Go to: https://resend.com/domains
2. Verify `duramettechnologies.com` still shows **"Verified"**
3. Check if there are any warnings or issues

## 🎯 Most Likely Issues

1. **Function not redeployed** - Client repo not synced yet
2. **Wrong API key** - API key in code doesn't match verified account
3. **Cached old code** - Browser/Netlify using old version

## ✅ Quick Test

After checking logs, you'll see exactly what's wrong. The improved error handling will show:
- Which API key is being used
- The exact Resend error
- Debug information

Check the Netlify function logs first - that will tell us exactly what's happening!


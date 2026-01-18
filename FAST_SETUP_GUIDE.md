# Fast Setup Guide - Get Emails Working NOW! ⚡

## 🚀 Quick Solution: Use Test Email Temporarily

While waiting for DNS verification, you can use Resend's test email to get emails working **immediately**:

### Option 1: Temporary Fallback (Works Right Now!)

Update your API files to use the test email temporarily. Once DNS is verified, switch back.

**Current setup** (waiting for DNS):
- FROM: `noreply@duramettechnologies.com` (requires verified domain)
- TO: `sales@duramettechnologies.com`

**Temporary setup** (works immediately):
- FROM: `onboarding@resend.dev` (works without verification)
- TO: `sales@duramettechnologies.com` (or your personal email for testing)

### Option 2: Speed Up DNS Propagation

DNS propagation is usually **15 minutes to 2 hours**, not 48 hours! Here's how to speed it up:

#### 1. **Add DNS Records Correctly**
   - Go to your domain provider (GoDaddy/Netlify)
   - Add ALL DNS records exactly as shown in Resend dashboard
   - Make sure there are no typos
   - Save and wait 5-10 minutes

#### 2. **Flush DNS Cache** (if testing locally)
   ```powershell
   # Windows PowerShell
   ipconfig /flushdns
   ```

#### 3. **Use Different DNS Servers for Testing**
   - Try checking from: https://dnschecker.org
   - Enter your domain and check if records are visible globally

#### 4. **Verify Immediately After Adding Records**
   - Don't wait - go to Resend dashboard
   - Click "Verify" button
   - Resend will check DNS immediately
   - If records are added correctly, it verifies in minutes!

### Option 3: Check DNS Records Now

Run this to check if DNS records are already live:

```bash
node scripts/check-dns.js
```

If records show up, verify immediately in Resend dashboard!

## ⚡ Fastest Path to Working Emails

### Step 1: Add DNS Records (5 minutes)
1. Go to Resend dashboard → Domains → `duramettechnologies.com`
2. Copy all DNS records shown
3. Go to your domain provider (GoDaddy/Netlify)
4. Add all records exactly as shown
5. Save

### Step 2: Wait 10-15 Minutes
- DNS propagation usually takes 15-30 minutes
- Check status: https://dnschecker.org

### Step 3: Verify in Resend (1 minute)
1. Go to Resend dashboard
2. Click "Verify" button
3. If DNS is correct, it verifies immediately!

### Step 4: Test (1 minute)
- Submit contact form
- Check `sales@duramettechnologies.com`

## 🎯 Total Time: ~20-30 Minutes (Not 48 Hours!)

## 💡 Pro Tips

1. **Use Cloudflare DNS** (if possible) - fastest propagation
2. **Lower TTL** - Set TTL to 300 seconds (5 minutes) before adding records
3. **Verify immediately** - Don't wait, click verify as soon as you add records
4. **Check from multiple locations** - Use dnschecker.org to see global status

## 🔄 Temporary Workaround

If you need emails working RIGHT NOW, I can update the code to use `onboarding@resend.dev` temporarily. Just let me know!


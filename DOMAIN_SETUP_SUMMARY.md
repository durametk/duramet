# Domain Setup Summary for duramettechnologies.com

## ✅ Current Configuration

Your website is live at: **https://duramettechnologies.com/**

### Email Configuration

All email settings are configured to use `duramettechnologies.com`:

- **FROM Address**: `noreply@duramettechnologies.com`
- **TO Address**: `sales@duramettechnologies.com`
- **Reply-To**: User's email (from contact form)

### Files Configured

✅ `api/send-email.ts` - Vercel/Netlify serverless function  
✅ `netlify/functions/send-email.ts` - Netlify function  
✅ `server.js` - Local development server  
✅ `src/lib/email.ts` - Frontend email API client  

## 🔐 Resend Domain Verification

### Current Status

Your Resend API key is **restricted to sending emails only**. It cannot access domain management features via API.

### How to Check Domain Status

1. **Go to Resend Dashboard**: https://resend.com/domains
2. **Find your domain**: `duramettechnologies.com`
3. **Check status**: Should show "Pending" or "Verified"

### DNS Records Required

In your domain provider (GoDaddy/Netlify), add these DNS records that Resend provides:

1. **DKIM Record** (TXT)
   - Name: `resend._domainkey`
   - Value: (provided by Resend)

2. **SPF Record** (TXT)
   - Name: `send`
   - Value: `v=spf1 include:amazonses.com ~all`

3. **MX Record** (optional, for receiving emails)
   - Name: `send`
   - Value: (provided by Resend)

### After DNS Records Are Added

1. Wait for DNS propagation (can take minutes to 48 hours)
2. Check Resend dashboard - status should change to "Verified"
3. Once verified, your contact form will work automatically!

## 📧 Email Flow

When someone submits the contact form:

1. **Email sent TO**: `sales@duramettechnologies.com`
2. **Email sent FROM**: `noreply@duramettechnologies.com`
3. **Auto-reply sent TO**: User's email address
4. **Auto-reply sent FROM**: `noreply@duramettechnologies.com`

## 🚀 Next Steps

1. ✅ Domain configured in code (DONE)
2. ⏳ Add DNS records in GoDaddy/Netlify
3. ⏳ Wait for DNS propagation
4. ⏳ Verify domain in Resend dashboard
5. ⏳ Test contact form

## 🔍 Testing

Once domain is verified, test the contact form:
- Visit: https://duramettechnologies.com/
- Go to Contact section
- Submit the form
- Check `sales@duramettechnologies.com` for the email

## 📝 Notes

- The API key restriction is normal for production - it's more secure
- Domain verification must be done through the Resend dashboard
- All code is ready - just waiting for DNS verification!


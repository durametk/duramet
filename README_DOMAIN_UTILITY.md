# Resend Domain Management Utility

This utility script helps you check and manage your Resend domain status using the Resend API.

## Installation

First, install the required dependency:

```bash
npm install
```

This will install `tsx` which is needed to run TypeScript files directly.

## Usage

### Check Domain Status

Check the status of your domain and view DNS records:

```bash
npm run check-domain
```

Or check a specific domain:

```bash
DOMAIN_NAME=duramet.k npm run check-domain
```

### Verify Domain

After adding DNS records to your domain provider, verify the domain:

```bash
npm run verify-domain
```

### Update Domain Settings

Update domain tracking settings (open tracking, click tracking):

```bash
npm run update-domain
```

## Available Commands

- `npm run check-domain` - Check domain status and DNS records
- `npm run verify-domain` - Verify domain after DNS records are added
- `npm run update-domain` - Update domain tracking settings

## Configuration

The script uses your Resend API key from:
1. Environment variable `RESEND_API_KEY`, or
2. Falls back to the hardcoded key in the script

To use a different domain, set the `DOMAIN_NAME` environment variable:

```bash
DOMAIN_NAME=duramet.k npm run check-domain
```

## What It Shows

- Domain name and ID
- Verification status (pending/verified)
- DNS records and their status
- Region and creation date
- Tracking settings

## Troubleshooting

If you get errors:
1. Make sure your Resend API key is correct
2. Ensure the domain name matches exactly (case-sensitive)
3. Check that DNS records are properly added in your domain provider (GoDaddy/Netlify)

## Next Steps

1. Add DNS records to your domain provider (as shown in Resend dashboard)
2. Wait for DNS propagation (can take minutes to hours)
3. Run `npm run verify-domain` to verify
4. Once verified, your emails will work with your custom domain!


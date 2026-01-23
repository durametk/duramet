# Duramet Technologies Website

Professional website for Duramet Technologies - Industrial components and solutions.

## 🚀 Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Hosting**: Vercel
- **DNS**: GoDaddy
- **Email Service**: Resend API

## 📧 Contact Form

Contact forms send emails via Resend API to `karthik.ramesh@duramettechnologies.com`.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run email server (local testing)
npm run server

# Run both (frontend + email server)
npm run dev:all

# Build for production
npm run build
```

## 📦 Deployment

1. Push to GitHub (private repo)
2. Vercel auto-deploys from GitHub
3. Forms work automatically via Vercel Serverless Functions

## 🔧 Configuration

- **Email API**: `api/send-email.ts` (Vercel Serverless Function)
- **Email Recipient**: `karthik.ramesh@duramettechnologies.com`
- **From Address**: `noreply@duramettechnologies.com`
- **Environment Variable**: `RESEND_API_KEY` (set in Vercel Dashboard)

## 📝 License

Private repository - Duramet Technologies

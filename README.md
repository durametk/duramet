# Duramet Technologies Website

Professional website for Duramet Technologies - Industrial components and solutions.

## 🚀 Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Hosting**: Netlify
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
2. Netlify auto-deploys from GitHub
3. Forms work automatically via Netlify Functions

## 🔧 Configuration

- **Email API**: `netlify/functions/send-email.ts`
- **Email Recipient**: `karthik.ramesh@duramettechnologies.com`
- **From Address**: `noreply@duramettechnologies.com`

## 📝 License

Private repository - Duramet Technologies

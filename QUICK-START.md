# Print Queen 3D - Quick Start Guide

## ✅ What's Done

Your Print Queen 3D storefront is **fully configured and ready to deploy**!

- ✅ Medusa Next.js storefront created
- ✅ Connected to Medusa Cloud backend (`https://printqueen3d.medusajs.app`)
- ✅ API key configured (`pk_eabc...`)
- ✅ Environment variables set up
- ✅ Dependencies installed (1,055 packages)
- ✅ Git initialized and first commit made
- ✅ Vercel configuration ready

## 🚀 Deploy Now (3 Steps)

### Step 1: Create GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. Name: `printqueen3d-storefront`
3. Keep it public or private (your choice)
4. **DO NOT** initialize with README
5. Click **"Create repository"**

### Step 2: Push Code to GitHub

Copy your repository URL, then run:

```bash
cd printqueen3d-storefront
git remote add origin https://github.com/YOUR-USERNAME/printqueen3d-storefront.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub
3. Click **"Import Project"**
4. Select `printqueen3d-storefront` repository
5. **Add Environment Variables**:

```
NEXT_PUBLIC_MEDUSA_BACKEND_URL
https://printqueen3d.medusajs.app

NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
pk_eabc62d2ba727f7489960bf91707410194df3b408c70ddd1a484132f1a8d90b0

NEXT_PUBLIC_DEFAULT_REGION
us

REVALIDATE_SECRET
printqueen3d_secret_key
```

6. Click **"Deploy"**
7. Wait 2-3 minutes ☕

## 🎉 After Deployment

### 1. Update Base URL
After deployment completes:
- Copy your Vercel URL (e.g., `https://printqueen3d-storefront.vercel.app`)
- Go to Vercel Settings → Environment Variables
- Add: `NEXT_PUBLIC_BASE_URL` = `your-vercel-url`
- Redeploy

### 2. Access Medusa Admin
- URL: [https://printqueen3d.medusajs.app/app](https://printqueen3d.medusajs.app/app)
- Create your admin account
- Add products for your store

### 3. Configure CORS
In Medusa Cloud dashboard:
- Go to Settings → CORS
- Add your Vercel URL

### 4. Add Products
Create these product categories:
- NFC Payment Stands
- QR Code Business Displays  
- NFC Keychains
- Custom Business Accessories

## 🎨 Next: Brand Customization

Once deployed, we can customize:
- Print Queen 3D logo and branding
- Cyan (#00B7EB) and Navy (#001F3F) color scheme
- Homepage hero section
- Request a quote form
- Portfolio/gallery page
- Custom product pages

## 📋 Project Structure

```
printqueen3d-storefront/
├── .env.local                    # Environment variables
├── vercel.json                   # Vercel configuration
├── README.md                     # Main documentation
├── VERCEL-DEPLOYMENT-GUIDE.md    # Detailed deployment guide
├── QUICK-START.md                # This file
├── package.json                  # Dependencies
├── src/                          # Source code
│   ├── app/                      # Next.js app directory
│   ├── lib/                      # Utilities and configs
│   └── modules/                  # Feature modules
└── public/                       # Static assets
```

## 🔧 Local Development

Test locally before deploying:

```bash
cd printqueen3d-storefront
npm run dev
```

Open [http://localhost:8000](http://localhost:8000)

## 📞 Need Help?

- **Full Guide**: See [VERCEL-DEPLOYMENT-GUIDE.md](./VERCEL-DEPLOYMENT-GUIDE.md)
- **Medusa Docs**: [https://docs.medusajs.com](https://docs.medusajs.com)
- **Vercel Support**: [https://vercel.com/support](https://vercel.com/support)

## ⏱️ Estimated Time

- Push to GitHub: **2 minutes**
- Deploy to Vercel: **3 minutes**
- Add first product: **5 minutes**
- **Total: ~10 minutes** to go live!

---

**Ready?** Start with Step 1 above! 🚀

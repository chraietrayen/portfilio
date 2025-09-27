# Portfolio Deployment Guide 🚀

## Quick Deployment to Vercel

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel --prod
```

### Step 4: Set Environment Variables
After deployment, add these in Vercel dashboard:
```
EMAIL_USER=rayenchraiet2000@gmail.com
EMAIL_PASS=yepbynvkqsdryrcw
RECIPIENT_EMAIL=rayenchraiet2000@gmail.com
MONGODB_URI=mongodb://localhost:27017/portfolio
```

## Alternative: GitHub + Vercel (Recommended)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Create repository: "portfolio-website"
3. Don't initialize with README

### Step 2: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Full-stack portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git
git push -u origin main
```

### Step 3: Connect Vercel to GitHub
1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Import your repository
4. Add environment variables
5. Deploy!

## Your Portfolio URL
After deployment: `https://your-portfolio-name.vercel.app`

## Custom Domain (Optional)
1. Buy domain (e.g., rayenchraiet.com)
2. Add in Vercel dashboard
3. Update DNS settings

## Environment Variables for Production
```env
EMAIL_USER=rayenchraiet2000@gmail.com
EMAIL_PASS=yepbynvkqsdryrcw
RECIPIENT_EMAIL=rayenchraiet2000@gmail.com
MONGODB_URI=mongodb+srv://your-atlas-uri (for production)
NODE_ENV=production
```

## MongoDB Production Setup
For production, use MongoDB Atlas (free):
1. Create account at https://cloud.mongodb.com
2. Create free cluster
3. Get connection string
4. Update MONGODB_URI in Vercel
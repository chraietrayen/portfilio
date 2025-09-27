# 🚀 Deployment Guide

This guide will help you deploy your portfolio application to production.

## Prerequisites

1. **Node.js installed** (v14 or higher)
2. **MongoDB setup** (local or MongoDB Atlas)
3. **Email configuration** (Gmail recommended)

## Quick Start (Local Development)

1. **Install Node.js** if not already installed:
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version` and `npm --version`

2. **Install Dependencies**:
   ```bash
   # Root dependencies
   npm install
   
   # Client dependencies
   cd client
   npm install
   
   # Server dependencies
   cd ../server
   npm install
   cd ..
   ```

3. **Setup Environment Variables**:
   ```bash
   cd server
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```

## 🌐 Production Deployment

### Option 1: Vercel (Frontend) + Render (Backend)

#### Frontend on Vercel
1. **Prepare for deployment**:
   ```bash
   cd client
   npm run build
   ```

2. **Deploy to Vercel**:
   - Connect GitHub repository to Vercel
   - Set build command: `npm run build`
   - Set output directory: `build`
   - Deploy from `client` directory

#### Backend on Render
1. **Create Render account** at [render.com](https://render.com)
2. **Create new Web Service**
3. **Configure settings**:
   - Build command: `npm install`
   - Start command: `npm start`
   - Root directory: `server`
4. **Set environment variables** in Render dashboard

### Option 2: Netlify (Frontend) + Railway (Backend)

#### Frontend on Netlify
1. **Build project**:
   ```bash
   cd client
   npm run build
   ```

2. **Deploy to Netlify**:
   - Drag and drop `build` folder to Netlify
   - Or connect GitHub repository

#### Backend on Railway
1. **Install Railway CLI**:
   ```bash
   npm install -g @railway/cli
   ```

2. **Deploy**:
   ```bash
   cd server
   railway login
   railway init
   railway up
   ```

### Option 3: Full Stack on Heroku

1. **Install Heroku CLI**
2. **Create Heroku app**:
   ```bash
   heroku create your-portfolio-app
   ```

3. **Set environment variables**:
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set EMAIL_USER=your_email
   heroku config:set EMAIL_PASS=your_password
   ```

4. **Deploy**:
   ```bash
   git push heroku main
   ```

## 🗄️ Database Setup

### Local MongoDB
```bash
# Install MongoDB Community Edition
# Start MongoDB service
mongod

# Create database (automatic on first connection)
```

### MongoDB Atlas (Recommended)
1. **Create account** at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. **Create cluster**
3. **Get connection string**:
   - Replace `<password>` with your password
   - Replace `<dbname>` with `portfolio`
4. **Update MONGODB_URI** in environment variables

## 📧 Email Configuration

### Gmail Setup
1. **Enable 2-Factor Authentication**
2. **Create App Password**:
   - Google Account → Security → 2-Step Verification
   - App passwords → Select app: Mail
   - Copy generated password
3. **Update environment variables**:
   ```env
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=generated_app_password
   RECIPIENT_EMAIL=your.email@gmail.com
   ```

## 🔧 Environment Variables

### Development (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_app_password
RECIPIENT_EMAIL=your.email@gmail.com
NODE_ENV=development
```

### Production
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_app_password
RECIPIENT_EMAIL=your.email@gmail.com
NODE_ENV=production
```

## 🚀 Launch Checklist

- [ ] Node.js installed
- [ ] Dependencies installed (`npm run install-all`)
- [ ] Environment variables configured
- [ ] Database connection tested
- [ ] Email functionality tested
- [ ] Frontend builds successfully
- [ ] Backend starts without errors
- [ ] All API endpoints working
- [ ] Contact form sends emails
- [ ] Responsive design tested

## 🐛 Troubleshooting

### Common Issues

1. **"npm is not recognized"**
   - Install Node.js from nodejs.org
   - Restart VS Code after installation

2. **MongoDB connection failed**
   - Check if MongoDB is running
   - Verify connection string
   - Check network access (for Atlas)

3. **Email not sending**
   - Verify Gmail app password
   - Check 2-factor authentication enabled
   - Test with different email provider

4. **CORS errors**
   - Ensure proxy in client/package.json
   - Check backend CORS configuration

5. **Build fails**
   - Clear node_modules and reinstall
   - Check for syntax errors
   - Update dependencies if needed

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review environment variable configuration
3. Test API endpoints individually
4. Check browser console for errors
5. Review server logs

## 🔄 Updates & Maintenance

### Updating Content
1. **Edit profile data** in MongoDB
2. **Add new sections** by creating components
3. **Update styling** in TailwindCSS configuration
4. **Add features** through API endpoints

### Security
- Regularly update dependencies
- Use environment variables for secrets
- Enable HTTPS in production
- Implement rate limiting for contact form

---

**Happy deploying! 🎉**
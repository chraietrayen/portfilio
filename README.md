# Portfolio - Interactive CV

A full-stack personal portfolio web application that mimics a code editor/IDE theme, built with React, TailwindCSS, Node.js, Express, and MongoDB.

## 🚀 Features

- **Code Editor Theme**: Dark mode interface inspired by VS Code
- **Interactive Sections**: Home, Information, Skills, Education, Experience, Contact
- **Syntax Highlighting**: Code-styled presentation of portfolio content
- **Responsive Design**: Mobile-friendly and responsive across all devices
- **Contact Form**: Send emails directly through the website
- **Real-time Data**: Backend API with MongoDB integration
- **Smooth Animations**: Framer Motion animations throughout

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Nodemailer** - Email sending functionality
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context for state management
│   │   ├── App.js          # Main App component
│   │   └── index.js        # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── server/                 # Node.js backend
│   ├── controllers/        # Request handlers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── server.js          # Server entry point
│   └── package.json
└── package.json           # Root package.json
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Clone the Repository
```bash
git clone <your-repo-url>
cd portfolio
```

### Install Dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
cd ..
```

### Environment Setup

1. Create `.env` file in the `server` directory:
```bash
cd server
cp .env.example .env
```

2. Edit `.env` file with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio

# Email Configuration (Gmail example)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

### Database Setup

**Option 1: Local MongoDB**
1. Install MongoDB locally
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/portfolio`

**Option 2: MongoDB Atlas (Cloud)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string and update `MONGODB_URI` in `.env`

### Email Configuration (Gmail)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in `EMAIL_PASS`

## 🚀 Running the Application

### Development Mode
```bash
# Run both client and server concurrently
npm run dev

# Or run separately:
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend  
npm run client
```

### Production Build
```bash
# Build frontend for production
npm run build

# Start production server
cd server
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📝 Customization

### Update Your Information

1. **Profile Data**: The app will create default data on first run. Update through:
   - Direct database editing
   - API endpoints (PUT /api/profile)
   - Add an admin interface (future enhancement)

2. **Styling**: Modify `tailwind.config.js` and CSS files for custom themes

3. **Content**: Update the default data in `server/controllers/profileController.js`

## 🌐 Deployment

### Frontend (Vercel/Netlify)

**Vercel:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from client directory
cd client
vercel --prod
```

**Netlify:**
```bash
# Build the project
cd client
npm run build

# Deploy dist folder to Netlify
```

### Backend (Render/Railway/Heroku)

**Render:**
1. Connect your GitHub repository
2. Set environment variables
3. Deploy from `server` directory

**Railway:**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
railway login
railway init
railway up
```

### Environment Variables for Production

Make sure to set these in your hosting platform:
- `MONGODB_URI` - Your MongoDB connection string
- `EMAIL_USER` - Your email for sending messages  
- `EMAIL_PASS` - Your email app password
- `RECIPIENT_EMAIL` - Email where contact form messages are sent
- `NODE_ENV=production`

## 📚 API Endpoints

### Profile
- `GET /api/profile` - Get profile data
- `PUT /api/profile` - Update profile data

### Contact
- `POST /api/contact` - Send contact email
  - Body: `{ name, email, subject, message }`

### Health Check
- `GET /api/health` - Server health check

## 🎨 Customization Guide

### Adding New Sections
1. Create new page component in `client/src/pages/`
2. Add route in `App.js`
3. Update sidebar navigation in `Sidebar.js`
4. Add corresponding API endpoints if needed

### Modifying Code Theme
Update colors in `tailwind.config.js`:
```javascript
colors: {
  'vscode-bg': '#1e1e1e',      // Background
  'vscode-blue': '#007acc',     // Keywords
  'vscode-green': '#4ec9b0',    // Strings
  // ... other colors
}
```

### Adding New Skills/Experience
Update the database directly or modify the default data in the profile controller.

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure proxy is set in `client/package.json`
2. **Email Not Sending**: Check Gmail app password and 2FA settings
3. **Database Connection**: Verify MongoDB is running and connection string is correct
4. **Port Conflicts**: Change ports in environment variables if needed

### Debug Mode
Set environment variables for debugging:
```bash
DEBUG=* npm run dev
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

## 🙋‍♂️ Support

If you have questions or need help:
1. Check the troubleshooting section
2. Open an issue on GitHub
3. Contact through the portfolio contact form

## 🔮 Future Enhancements

- [ ] Admin panel for easy content management
- [ ] Blog section with markdown support
- [ ] Project gallery with filtering
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Progressive Web App (PWA) features

---

**Built with ❤️ using modern web technologies**
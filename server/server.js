const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/profile', require('./routes/profile'));
app.use('/api/contact', require('./routes/contact'));

// MongoDB connection with timeout
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
})
.then(() => {
  console.log('✅ MongoDB connected successfully');
})
.catch(err => {
  console.log('⚠️  MongoDB connection failed:', err.message);
  console.log('📝 Server will continue with limited functionality');
  console.log('💡 To fix: Start MongoDB or configure MongoDB Atlas connection');
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
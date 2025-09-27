const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');

const sendEmail = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    // Debug: Check environment variables
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***configured***' : 'NOT SET');
    
    // Check if email configuration exists
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'your-app-password' || process.env.EMAIL_PASS === 'your-actual-16-character-app-password-here') {
      console.log('Email configuration missing or using placeholder, simulating email send...');
      return res.json({ 
        message: 'Message received! Thank you for your message. Email setup in progress.', 
        demo: true 
      });
    }

    // Create transporter with flexible configuration
    const transporterConfig = {
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    };

    // Use custom SMTP or service provider
    if (process.env.EMAIL_HOST) {
      transporterConfig.host = process.env.EMAIL_HOST;
      transporterConfig.port = process.env.EMAIL_PORT || 587;
      transporterConfig.secure = process.env.EMAIL_SECURE === 'true';
    } else {
      transporterConfig.service = process.env.EMAIL_SERVICE || 'gmail';
    }

    const transporter = nodemailer.createTransport(transporterConfig);

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email
    };

    // Verify transporter configuration
    await transporter.verify();
    
    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    
    // Provide more specific error messages
    if (error.code === 'EAUTH') {
      return res.status(500).json({ 
        message: 'Email authentication failed. Please check your email credentials.' 
      });
    } else if (error.code === 'ENOTFOUND') {
      return res.status(500).json({ 
        message: 'Email service not found. Please check your internet connection.' 
      });
    }
    
    res.status(500).json({ 
      message: 'Failed to send email. Please try again later.' 
    });
  }
};

module.exports = {
  sendEmail
};
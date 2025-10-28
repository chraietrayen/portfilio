const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');

const sendEmail = async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed. Please check all fields.',
        errors: errors.array() 
      });
    }

    const { name, email, subject, message } = req.body;

    // Check if email configuration exists
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Email configuration missing');
      return res.status(503).json({ 
        message: 'Email service is temporarily unavailable. Please try again later or contact directly at rayenchraiet2000@gmail.com',
        demo: true 
      });
    }

    // Check for placeholder passwords
    const placeholders = ['your-app-password', 'your-actual-16-character-app-password-here', 'PUT-YOUR-16-CHARACTER-APP-PASSWORD-HERE'];
    if (placeholders.includes(process.env.EMAIL_PASS)) {
      console.log('Using placeholder password');
      return res.json({ 
        message: 'Thank you for your message! Email functionality is being configured. You can reach me directly at rayenchraiet2000@gmail.com',
        demo: true 
      });
    }

    // Create transporter with flexible configuration
    const transporterConfig = {
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      pool: true, // Use pooled connection
      maxConnections: 1,
      rateDelta: 20000,
      rateLimit: 5
    };

    // Use custom SMTP or service provider
    if (process.env.EMAIL_HOST) {
      transporterConfig.host = process.env.EMAIL_HOST;
      transporterConfig.port = parseInt(process.env.EMAIL_PORT) || 587;
      transporterConfig.secure = process.env.EMAIL_SECURE === 'true';
    } else {
      transporterConfig.service = process.env.EMAIL_SERVICE || 'gmail';
    }

    const transporter = nodemailer.createTransport(transporterConfig);

    // Email options with better formatting
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: `🌐 Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1e1e1e; color: #007acc; padding: 20px; text-align: center; }
            .content { background: #f4f4f4; padding: 20px; margin: 20px 0; }
            .field { margin: 15px 0; }
            .label { font-weight: bold; color: #007acc; }
            .footer { text-align: center; color: #666; font-size: 12px; padding: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Portfolio Contact</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">From:</span> ${name}
              </div>
              <div class="field">
                <span class="label">Email:</span> ${email}
              </div>
              <div class="field">
                <span class="label">Subject:</span> ${subject}
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from your portfolio contact form</p>
              <p>Reply directly to: ${email}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Portfolio Contact
        
        From: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        Reply to: ${email}
      `,
      replyTo: email
    };

    // Verify transporter configuration
    console.log('Verifying email configuration...');
    await transporter.verify();
    console.log('Email configuration verified successfully');
    
    // Send email
    console.log('Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    res.json({ 
      message: 'Thank you for your message! I will get back to you as soon as possible.',
      success: true 
    });
  } catch (error) {
    console.error('Email error:', error);
    
    // Provide more specific error messages
    if (error.code === 'EAUTH') {
      return res.status(500).json({ 
        message: 'Email authentication failed. Please try contacting directly at rayenchraiet2000@gmail.com' 
      });
    } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNECTION') {
      return res.status(500).json({ 
        message: 'Unable to connect to email server. Please try again later or email directly: rayenchraiet2000@gmail.com' 
      });
    } else if (error.code === 'ETIMEDOUT') {
      return res.status(500).json({ 
        message: 'Email service timed out. Please try again or contact: rayenchraiet2000@gmail.com' 
      });
    }
    
    res.status(500).json({ 
      message: 'Failed to send email. Please contact directly: rayenchraiet2000@gmail.com' 
    });
  }
};

module.exports = {
  sendEmail
};
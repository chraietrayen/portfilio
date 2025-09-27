# Email Configuration Setup

## Gmail Setup (Recommended)

### Step 1: Enable 2-Factor Authentication
1. Go to Google Account settings
2. Navigate to Security → 2-Step Verification
3. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. Go to Security → 2-Step Verification → App passwords
2. Select "Mail" and your device
3. Copy the 16-character app password (no spaces)

### Step 3: Update .env File
```env
EMAIL_USER=rayenchraiet2000@gmail.com
EMAIL_PASS=your-16-character-app-password
RECIPIENT_EMAIL=rayenchraiet2000@gmail.com
```

### Step 4: Test the Configuration
1. Restart the server: `npm run dev`
2. Submit the contact form
3. Check your email for the message

## Alternative Email Services

### Outlook/Hotmail
```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
EMAIL_SERVICE=outlook
```

### Custom SMTP
```env
EMAIL_HOST=smtp.your-provider.com
EMAIL_PORT=587
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
EMAIL_SECURE=false
```

## Troubleshooting

### Common Issues:
1. **Authentication Error**: Check app password is correct
2. **Connection Error**: Check internet connection
3. **Security Error**: Ensure 2FA is enabled and app password is used

### Demo Mode:
If email credentials are not configured, the system runs in demo mode and simulates email sending for development purposes.
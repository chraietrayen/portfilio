const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { sendEmail } = require('../controllers/contactController');

// @route   POST /api/contact
// @desc    Send contact email
// @access  Public
router.post('/', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please include a valid email'),
  body('subject').notEmpty().withMessage('Subject is required'),
  body('message').isLength({ min: 10 }).withMessage('Message must be at least 10 characters long')
], sendEmail);

module.exports = router;
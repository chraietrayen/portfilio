const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/profileController');

// @route   GET /api/profile
// @desc    Get profile data
// @access  Public
router.get('/', getProfile);

// @route   PUT /api/profile
// @desc    Update profile data
// @access  Private (add authentication later if needed)
router.put('/', updateProfile);

module.exports = router;
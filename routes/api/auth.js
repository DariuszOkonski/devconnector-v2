const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();

/**
 * @route   GET api/route
 * @desc    Test route
 * @access  Public
 */
router.get('/', auth, (req, res) => {
  res.send('Auth route');
});

module.exports = router;

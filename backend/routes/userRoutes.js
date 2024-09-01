const express = require('express');
const { registerUser, authUser, getUserProfile } = require('../controllers/userController');
const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(getUserProfile);

module.exports = router;

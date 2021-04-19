'use strict';
const express = require('express'),
      router = express.Router(),
      LoginController = require('../controllers/loginController');

// Login
router.post('/login', (req, res) => {
    //LoginController.login
});
module.exports = router;
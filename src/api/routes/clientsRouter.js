'use strict';
const express = require('express'),
    router = express.Router(),
    clientsController = require('../controllers/clientsController');


// Get the visor from token
router.get('/', (req, res) => {
    clientsController.find();
});

module.exports = router;
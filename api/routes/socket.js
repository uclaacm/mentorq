'use strict';

const express = require('express');
let router = express.Router();

const socketController = require('../controllers/SocketController');

router.get('/', socketController.index);
router.get('/test', socketController.test);

module.exports = router;
'use strict';

const express = require('express');
let router = express.Router();

const userController = require('../controllers/UserController');

router.get('/', userController.index);
router.get('/test', userController.test);

module.exports = router;
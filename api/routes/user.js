'use strict';

const express = require('express');
let router = express.Router();

const userController = require('../controllers/UserController');
const authController = require('../controllers/AuthController');

router.get('/', userController.index);
router.get('/test', userController.test);
router.get('/current', authController.isAuthenticated, userController.current);

module.exports = router;
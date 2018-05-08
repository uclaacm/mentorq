'use strict';

const express = require('express');
const router = new express.Router();

const userController = require('../controllers/UserController');
const authController = require('../controllers/AuthController');

router.get('/', userController.getAll);
router.get('/test', userController.test);
router.get('/current', authController.isAuthenticated, userController.current);
router.get('/mentors/active', userController.getActiveMentors);

// Example endpoint: /user/<id>?mentor=true&admin=true
router.post('/:id', userController.update);

module.exports = router;

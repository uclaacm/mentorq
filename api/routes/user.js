'use strict';

const express = require('express');
const router = new express.Router();

const userController = require('../controllers/UserController');

router.get('/', userController.getAll);
router.get('/current', userController.current);
router.get('/mentors/active', userController.getActiveMentorsRoute);

// Example endpoint: /user/<id>?mentor=true&admin=true
router.post('/:id', userController.update);

module.exports = router;

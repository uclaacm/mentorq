'use strict';

const express = require('express');
const router = new express.Router();

const ticketController = require('../controllers/TicketController');

router.get('/', ticketController.index);
router.get('/test', ticketController.test);

module.exports = router;

'use strict';

const express = require('express');
const router = new express.Router();

const ticketController = require('../controllers/TicketController');

router.get('/', ticketController.index);
router.get('/test', ticketController.test);
router.get('/unclaim/:id', ticketController.unclaim);
router.get('/resolve/:id', ticketController.resolve);

router.post('/claim/:id', ticketController.claim);

module.exports = router;

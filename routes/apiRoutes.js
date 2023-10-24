var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

router.get('/v2/tickets/count', apiController.getTicketCount);
router.get('/v2/tickets', apiController.getTickets);
router.get('/v2/tickets/recent', apiController.getTicketsRecent);
router.get('/v2/tickets/email', apiController.getTicketsEmail);

module.exports = router;

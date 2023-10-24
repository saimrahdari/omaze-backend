var asyncHandler = require('../middleware/asyncHandler');
var axios = require('axios');

var key = 'USMxkfPPR1PZ9K1H0cSkDtTomo0c19DTbxGuxzrP';
var username = 'zsarani@zqconsulting.com.au';
var auth = 'Basic ' + new Buffer(username + '/token:' + key).toString('base64');

exports.getTicketCount = asyncHandler(async (req, res, next) => {
	var config = {
		method: 'GET',
		url: 'https://omaze1696424492.zendesk.com/api/v2/tickets/count',
		headers: {
			'Content-Type': 'application/json',
			Authorization: auth,
		},
	};
	axios(config)
		.then(function (response) {
			res.status(200).json({ data: response.data });
		})
		.catch(function (error) {
			res.status(401).send('UnAuthorized.');
		});
});

exports.getTickets = asyncHandler(async (req, res, next) => {
	var config = {
		method: 'GET',
		url: 'https://omaze1696424492.zendesk.com/api/v2/tickets',
		headers: {
			'Content-Type': 'application/json',
			Authorization: auth,
		},
		params: {
			external_id: '',
		},
	};

	axios(config)
		.then(function (response) {
			res.status(200).json({ data: response.data });
		})
		.catch(function (error) {
			res.status(401).send('UnAuthorized.');
		});
});

exports.getTicketsRecent = asyncHandler(async (req, res, next) => {
	var config = {
		method: 'GET',
		url: 'https://omaze1696424492.zendesk.com/api/v2/tickets/recent',
		headers: {
			'Content-Type': 'application/json',
			Authorization: auth,
		},
		params: {
			external_id: '',
		},
	};

	axios(config)
		.then(function (response) {
			res.status(200).json({ data: response.data });
		})
		.catch(function (error) {
			res.status(401).send('UnAuthorized.');
		});
});

exports.getTicketsEmail = asyncHandler(async (req, res, next) => {
	var search_string = `requester:${req.query.email}`;
	var config = {
		method: 'GET',
		url: `https://omaze1696424492.zendesk.com/api/v2/search.json?query=${search_string}`,
		headers: {
			'Content-Type': 'application/json',
			Authorization: auth,
		},
		params: {
			external_id: '',
		},
	};

	axios(config)
		.then(function (response) {
			res.status(200).json({ data: response.data });
		})
		.catch(function (error) {
			res.status(401).send('UnAuthorized.');
		});
});

var express = require('express');
var app = express();
var logger = require('morgan');
var cors = require('cors');

var errorMiddleware = require('./middleware/errorMiddleware');
var ErrorHandler = require('./utils/error');

var Api = require('./routes/apiRoutes');

app.listen(4000, () => {
	console.log(`Running on port 4000 👍.`);
});

app.use(logger('dev'));
app.use(express.json({}));
app.use(cors());

app.use('/api', Api);

app.all('*', (req, res, next) => {
	next(new ErrorHandler('No Api Route Hit -- Bad Request', 404));
});
app.use(errorMiddleware);

module.exports = app;

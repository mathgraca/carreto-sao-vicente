const express = require('express');

module.exports = function() {
	const app = express();

	app.use(express.static('./public'));
	app.set('view engine', 'ejs');

	require('./routes/carreto')(app);

	return app;
};





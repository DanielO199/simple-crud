const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const usersRoutes = require('./routes/user-routes');
const productsRoutes = require('./routes/product-routes');

const server = express();

server.use(bodyParser.json());

server.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');

	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

	next();
});

server.use('/api/users', usersRoutes);
server.use('/api/products', productsRoutes);

server.use(() => {
	throw new Error('Could not find this route');
});

mongoose
	.connect(
		'mongodb+srv://Bananq199:vvuaplPpz70ao31V@cluster0-fm9cw.mongodb.net/crm-db?retryWrites=true&w=majority'
	)
	.then(server.listen(5000))
	.catch((err) => {
		console.log(err);
	});

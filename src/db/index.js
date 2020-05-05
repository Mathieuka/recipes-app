const mongoose = require('mongoose');

const mongooseConnection = (uri) => {
	mongoose
		.connect(uri)
		.then(() => console.log('DB connected'))
		.catch((err) => console.error(`ERROR:: ${err}`));
};

module.exports = mongooseConnection;

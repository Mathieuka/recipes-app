const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const mongooseConnection = () => {
	mongoose
		.connect(process.env.MONGO_URI)
		.then(() => console.log('Mongoose DB connected'))
		.catch((err) => console.error(`ERROR:: ${err}`));
};


module.exports = mongooseConnection;

const express = require('express');
const PORT = process.env.PORT || 4444;
const app = express();
const mongooseConnection = require('./src/db')

require('dotenv').config({ path: 'variables.env' });

mongooseConnection(process.env.MONGO_URI);

app.listen(PORT, () => {
	console.log(`Server listening on port:: ${PORT}`);
});

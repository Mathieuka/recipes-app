const express = require('express');
const PORT = process.env.PORT || 4444;
const app = express();
const mongooseConnection = require('./src/db');
const bodyParser = require('body-parser');

// Mongoose models
const User = require('./src/db/models/User');
const Recipes = require('./src/db/models/Recipe');

// Bring in GraphQL-Express middleware
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { typeDefs } = require('./src/GraphQl/schema');
const { resolvers } = require('./src/GraphQl/resolvers');

// Create schema
const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

// Mongoose connection
mongooseConnection();

// Create GraphiQL application
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));


// Connect schemas with GraphQL
app.use('/graphiql', graphqlExpress({
	schema,
	context: {
		User,
		Recipes,
	}
}))

// Initializes app
app.listen(PORT, () => {
	console.log(`Express server listening on port:: ${PORT}`);
});

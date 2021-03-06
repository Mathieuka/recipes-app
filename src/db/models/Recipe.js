const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: String,
	},
	instruction: {
		type: String,
		required: String,
	},
	createDate: {
		type: Date,
		default: Date.now,
	},
	likes: {
		type: Number,
		default: 0,
	},
	username: {
		type: String,
	},
});

module.exports = mongoose.model('Recipe', RecipeSchema);

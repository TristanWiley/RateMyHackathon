import { Class } from 'meteor/jagi:astronomy';

const Hackathons = new Mongo.Collection('hackathons');

export const Hackathon = Class.create({
	name: 'Hackathon',
	collection: Hackathons,
	fields: {
		name: String,
		description: String,
		location: String,
		devPost: String
	}
});

import { Meteor } from 'meteor/meteor';
import {Hackathon} from '../lib/models/Hackathons';

Meteor.startup(() => {
	// code to run on server at startup
	if (!Hackathon.findOne({"name": "HackRPI"})) {
		new Hackathon({
			"name": "HackRPI",
			description: "That one at RPI",
			location: "Troy, NY",
			devPost: "https://devpost.com"
		}).save();

		new Hackathon({
			"name": "PennApps",
			description: "That one in Philly",
			location: "Philadelphia, PA",
			devPost: "https://devpost.com"
		}).save();

		new Hackathon({
			"name": "HackUpstate",
			description: "That tiny one in Syracuse",
			location: "Syracuse, NY",
			devPost: "https://devpost.com"
		}).save();

	}
});

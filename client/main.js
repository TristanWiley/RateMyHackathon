import {Hackathon} from '../lib/models/Hackathons';

Tracker.autorun(function () {
	const hackathons = Hackathon.find({},{name: 1}).fetch();
	const hackathonNames = hackathons.map((hackathon)=>{return hackathon.name});
	$("#hackathonName").typeahead({ source:hackathonNames });
});

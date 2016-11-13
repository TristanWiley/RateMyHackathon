import {Hackathon} from '../lib/models/Hackathons';

Tracker.autorun(function () {
	const input = $("#hackathonName");
	const hackathons = Hackathon.find({},{name: 1}).fetch();
	const hackathonNames = hackathons.map((hackathon)=>{return hackathon.name});
	input.typeahead({ source:hackathonNames });

	input.change((event)=>{
		console.log(event.target.value);
	})


});

Template.home.events({
	'submit form': function(event){
		event.preventDefault();
	}
});

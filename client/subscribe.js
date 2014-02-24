console.log("going to subscribe!");
Deps.autorun(function() {
	console.log("subscribing!");
	Meteor.subscribe("pets");
	Meteor.subscribe("food");
});
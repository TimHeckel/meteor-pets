Meteor.startup(function() {
	Meteor.subscribe("pets");
	Meteor.subscribe("food");
});
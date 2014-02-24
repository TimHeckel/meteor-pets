console.log("going to subscribe!");
Deps.autorun(function() {
	Meteor.subscribe("pets");
	Meteor.subscribe("food");
});
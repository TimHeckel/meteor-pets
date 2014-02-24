Meteor.publish("food", function() {
	console.log("going to send down food ", Food.find().count());
	return Food.find();
});

Meteor.publish("pets", function() {
	console.log("going to send down pets ", Pets.find().count());
	return Pets.find();
});
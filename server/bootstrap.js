Meteor.startup(function() {
	console.log("checking", Food.find().count(), Pets.find().count());
	if (Food.find().count() === 0) {
		console.log("inserting food");
		Food.insert({ _id: "Hay", nutrition: 200, calories: 100 });
	}
});
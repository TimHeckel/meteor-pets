Meteor.startup(function() {
	if (Food.find().count() === 0) {
		Food.insert({ _id: "Hay", nutrition: 200, calories: 100 });
	}
});
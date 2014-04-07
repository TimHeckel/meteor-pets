var _food = function() {
	return Food.findOne({ _id: Session.get(Pet.Constants.selectedFoodId) });
};

Template.save_food.food = function() {
	var f = _food() || {};
	console.log("got food ", f);
	return f;
};
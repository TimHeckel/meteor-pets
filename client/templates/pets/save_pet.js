var _pet = function() {
	return Pets.findOne(Session.get(Pet.Constants.selectedPetId));
};

Template.save_pet.pet = function() {
	var _p = _pet() || {};
	console.log("returning pet ", _p);
	return _p;
};

Template.save_pet.food = function() {
	return Food.find();
};

Template.save_pet.isBoy = function() {

}

Template.save_pet.isFoodSelected = function() {

}
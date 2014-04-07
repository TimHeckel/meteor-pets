
var _pet = function() {
	return Pets.findOne(Session.get(Pet.Constants.selectedPetId));
};

Template.individual_pet.rendered = function() {
	$(".allPets").on("click", "#btnFeedPet", function() {
		var _foodId = $("#petFood").val();
		Pets.update({ _id: Session.get(Pet.Constants.selectedPetId) }, { $set: { foodId: _foodId } });
	});
};

Template.individual_pet.food = function() {
	return Food.find();
};

Template.individual_pet.isFoodSelected = function(foodId) {
	return _pet().foodId === foodId;
};

Template.individual_pet.foodName = function() {
	var f = Food.findOne(this.foodId);
	return f ? f._id : "Mystery Meat";
};

Template.individual_pet.pet = function() {
	window.setTimeout(function() {
		var _img = $(".virtual-pet[data-id='" + Session.get(Pet.Constants.selectedPetId) + "']");
		Pet.Animate(_img, _pet());
	}, 1000);
	return _pet();
};

Template.individual_pet.getPetUrl = function() {
	return Pet.Utils.getUrl(this.type);
};
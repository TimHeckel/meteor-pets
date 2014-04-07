var _petWatcher, _foodWatcher;

Template.pets.rendered = function() {
	$(".ourPets").on("click", ".fence", function() {
		var s = $(this);
		if (!s.attr("data-id")) {
			s = s.parents(".fence");
		}
		Router.go("/pets/" + s.attr("data-id"));
	});
};

Template.pets.destroyed = function() {
	_petWatcher && _petWatcher.stop();
	_foodWatcher && _foodWatcher.stop();
};

Template.pets.pet = function() {
	return Pets.find();
};

Template.pets.foodName = function() {
	var f = Food.findOne(this.foodId);
	return f ? f._id : "Mystery Meat";
};

Template.pets.getPetUrl = function() {
	return Pet.Utils.getUrl(this.type);
};
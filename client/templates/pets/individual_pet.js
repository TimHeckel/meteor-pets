
var _pet = function() {
	return Pets.findOne(Session.get(Pet.Constants.selectedPetId));
};

Template.individual_pet.pet = function() {
	window.setTimeout(function() {
		_watcher = Deps.autorun(function() {
			Pets.find({ _id: Session.get(Pet.Constants.selectedPetId) }).observe({
				added: function(doc) {
					var _img = $(".virtual-pet[data-id='" + doc._id + "']");
					console.log("img", _img);
					Pet.Animate($(".virtual-pet[data-id='" + doc._id + "']"), _pet());
				},
				changed: function(doc) {					
					Pet.Animate($(".virtual-pet[data-id='" + doc._id + "']"), _pet());
				}
				, removed: function(doc) {
					var _pen = $(".pen[data-id='" + doc._id + "']");
					var _intro = $(".petIntro[data-id='" + doc._id + "']");
					_intro.html("Oh dear " + doc._id + " - we will miss you SO much!");
					_pen.html(":(").css("font-size", "100pt");
				}
			});
		});
	}, 500);
	return _pet();
};

Template.individual_pet.getPetUrl = function() {
	return Pet.Utils.getUrl(this.type);
};
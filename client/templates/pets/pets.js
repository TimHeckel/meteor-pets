var _watcher;

Template.pets.rendered = function() {
	_watcher = Deps.autorun(function() {
		Pets.find().observe({
			added: function(doc) {
				_adjust(doc);
			},
			changed: function(doc) {					
				_adjust(doc);
			}
			, removed: function(doc) {
				var _pen = $(".pen[data-id='" + doc._id + "']");
				var _intro = $(".petIntro[data-id='" + doc._id + "']");
				_intro.html("Oh dear " + doc._id + " - we will miss you SO much!");
				_pen.html(":(").css("font-size", "100pt");
			}
		});
	});

	$(".ourPets").on("click", ".fence", function() {
		var s = $(this);
		if (!s.attr("data-id")) {
			s = s.parents(".fence");
		}
		Router.go("/pets/" + s.attr("data-id"));
	});
};

function _adjust(doc) {
	var _img = $(".virtual-pet[data-id='" + doc._id + "']");
	Pet.Animate(_img, doc);
};

Template.pets.destroyed = function() {
	_watcher && _watcher.stop();
};

Template.pets.pet = function() {
	return Pets.find();
};

Template.pets.getPetUrl = function() {
	return Pet.Utils.getUrl(this.type);
};


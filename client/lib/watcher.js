Meteor.startup(function() {
	
	Meteor.subscribe("pets");
	Meteor.subscribe("food");

	_petWatcher = Deps.autorun(function() {
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

	_foodWatcher = Deps.autorun(function() {
		Food.find().observe({
			added: function(doc) {
				_adjustViaFood(doc);
			},
			changed: function(doc) {					
				_adjustViaFood(doc);
			}
			, removed: function(doc) {
				_adjustViaFood(doc);
			}
		});
	});

	function _adjustViaFood(doc) {
		var _imgs = $(".virtual-pet[data-food-id='" + doc._id + "']");
		_.each(_imgs, function(i) {
			var _pet = Pets.findOne($(i).attr("data-id"));
			_adjust(_pet, $(i));
		});
	};

	function _adjust(doc, img) {
		var _img = img || $(".virtual-pet[data-id='" + doc._id + "']");
		console.log("going to animate ", _img);
		Pet.Animate(_img, doc);
	};

});
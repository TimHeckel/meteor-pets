Pet.Animate = function(_img, doc) {

	var _food = Food.findOne(doc.foodId);
	var _name = _food ? _food._id : "mysery meaty substance";
	var _calories = _food ? _food.calories : 100;
	var _nutrition = _food ? _food.nutrition : 2000;

	_img.animate({ width: Math.min(_calories, 300) + "px", duration: 2000 }, function() {
		$(".message[data-id='" + doc._id + "']").html("Mmmm......" + _name);
		_sway(_img, _nutrition);
	});

};

function _sway(_img, _duration) {
	_img.rotate({
 		duration: _duration
 		, angle: -60
 		, animateTo: 60
 		, easing: $.easing.easeInOutElastic
 		, callback: function() {
 			_swoop(_img, _duration);
 		}
 	});
};

function _swoop(_img, duration) {
	_img.rotate({
 		duration: duration
 		, angle: 60
 		, animateTo: -60
 		, easing: $.easing.easeInOutElastic
 		, callback: function() {
 			_sway(_img, duration);
 		}
 	});
};
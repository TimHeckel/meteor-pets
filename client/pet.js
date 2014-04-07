MeteorPet = function(_owner, _type, _name, _boyOrGirl, _feed) { 
	var _self = this;
	if (!(this instanceof MeteorPet))
    	return new MeteorPet(opts);

    var _img, _nutrition = 2000;

    function _set(doc) {
    	_type = doc.type;
		_owner = doc.owner;
		_name = doc._id;
		_boyOrGirl = doc.boyOrGirl;
		_feed = doc.foodId;

    	$("#pen").html("");
    	var _animalUrl = ["/packages/meteorpets/client/images/", _type, ".png"].join('');
    	var c = $("<h2 style='text-align:center;margin-bottom:-10px;' id='name'></h2><p style='text-align:center' id='intro'><p><table style='width:100%;height:100%;margin-top:-80px;'><tbody><tr><td style='vertical-align:middle; text-align:center' id='pen'></td></tr></tbody></table><span id='messages'></span>");
		$(".fence").append(c);

		$("#name").html("Hi, " + _owner + "!");
		$("#intro").html("Meet " + _name + ". " + (_boyOrGirl === "boy" ? "He" : "She") + " loves you <b>so</b> much.");

		_img = $("<img>").attr("src", _animalUrl).css("width", 100);
		$("#pen").append(_img);

		_feedMe();		
    };

    function _feedMe() {
    	var _food = Food.findOne({ _id: _feed });
    	if (_food) {
			_img.animate({ width: _food.calories + "px", duration: 2000 });
			$("#messages").html("Mmmmm...." + _feed + "!");
			_nutrition = _food.nutrition * 10;
			_sway();
		}
    };

    function init() {

    	if (!Pets.findOne({_id: _name})) {
    		Pets.insert({ _id: _name, owner: _owner, type: _type, boyOrGirl: _boyOrGirl, foodId: _feed });
    	} else {
    		Pets.update({ _id: _name }, { $set: { owner: _owner, type: _type, boyOrGirl: _boyOrGirl, foodId: _feed } });
    	}

		Deps.autorun(function() {
			Pets.find({_id: _name}).observe({
				added: function(doc) {
					_set(doc);
				},
				changed: function(doc) {					
					_set(doc);
				}
				, removed: function(doc) {
					$("#intro").html("Oh dear " + _name + " - we will miss you SO much!");
					$("#pen").html(":(").css("font-size", "100pt");
				}
			});
		});

		Deps.autorun(function() {
			Food.find().observe({
				added: function(doc) {
					if (_feed === doc._id) {
						_img.animate({ width: Food.findOne({ _id: _feed }).calories + "px", duration: 2000 });
						$("#messages").html("Mmmmm...." + doc._id + "!");
						_sway(Food.findOne({_id: _feed }).nutrition * 10);
					}
				},
				changed: function(doc) {
					if (_feed === doc._id) {
						_img.animate({ width: Food.findOne({ _id: _feed }).calories + "px", duration: 2000 });
						$("#messages").html("Mmmmm...." + doc._id + "!");
						_sway(Food.findOne({_id: _feed }).nutrition * 10);
					}
				},
				removed: function(doc) {
					if (_feed === doc._id) {
						_img.animate({ width: "20px", duration: 2000 });
						$("#messages").html("I'm sooo hungry!!");
						_sway(2000);
					}
				}
			});
		});

    };

    function _sway() {
    	_img.rotate({
	 		duration: _nutrition
	 		, angle: -60
	 		, animateTo: 60
	 		, easing: $.easing.easeInOutElastic
	 		, callback: function() {
	 			_swoop();
	 		}
	 	});
    };

    function _swoop(dur) {
    	_img.rotate({
	 		duration: _nutrition
	 		, angle: 60
	 		, animateTo: -60
	 		, easing: $.easing.easeInOutElastic
	 		, callback: function() {
	 			_sway();
	 		}
	 	});
    };

 	_self.feed = function(food) {
 		Pets.update({ _id: _name }, { $set: { foodId: food } });
 	};

    init();

    return _self;
};
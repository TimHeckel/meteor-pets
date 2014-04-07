Pet.Utils = {};
Pet.Utils.getUrl = function(_type) {
	var _animalUrl = ["/packages/meteorpets/client/images/", _type, ".png"].join('');
	return _animalUrl;
};
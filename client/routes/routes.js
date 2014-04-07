Router.map(function () {

	//PETS
	this.route("pets", {
	    path: "/pets"
	    , template: "pets"
	});

	this.route("savePet", {
	    path: "/pets/save/:id?"
	    , template: "save_pet"
	    , onBeforeAction: function() {
	    	Session.set(Pet.Constants.selectedPetId, this.params.id);
	    }
	});

	this.route("individualPets", {
	    path: "/pets/:id"
	    , template: "individual_pet"
	    , onBeforeAction: function() {
	    	console.log("setting pet");
	    	Session.set(Pet.Constants.selectedPetId, this.params.id);
	    }
	  	, waitOn: function() {
	  		return Meteor.subscribe("pets");
	  	}
	});

	//FOOD
	this.route("food", {
	    path: "/food"
	    , template: "food"
	});

	this.route("saveFood", {
	    path: "/food/save/:id?"
	    , template: "save_food"
	    , onBeforeAction: function() {
	    	Session.set(Pet.Constants.selectedFoodId, this.params.id);
	    }
	});

	this.route("individualFood", {
	    path: "/food/:id"
	    , template: "individual_food"
	    , onBeforeAction: function() {
	    	Session.set(Pet.Constants.selectedFoodId, this.params.id);
	    }
	});

});
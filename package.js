Package.describe({
    summary: "Hooray for virtual pets!"
});

Package.on_use(function (api) {

	api.use(['standard-app-packages', 'jquery', 'underscore', 'templating', 'handlebars', 'deps', 'iron-router'], 'client');
	
	api.add_files("lib/models.js", ["client", "server"]);
	api.add_files("server/bootstrap.js", "server");
	api.add_files("server/rules.js", "server");
	api.add_files("server/publish.js", "server");

	api.add_files("client/lib/watcher.js", "client");

	api.add_files('client/images/giraffe.png', "client");
	api.add_files('client/images/monkey.png', "client");
	api.add_files('client/images/rhino.png', "client");

	api.add_files('client/css/pets.css', "client");

	api.add_files('client/lib/pet.js', "client");
	api.add_files('client/lib/constants.js', "client");
	api.add_files('client/lib/animate.js', "client");
	api.add_files('client/lib/utils.js', "client");

	api.add_files('client/lib/jquery.rotate.js', "client");

	api.add_files('client/routes/routes.js', "client");

	api.add_files('client/templates/loading.html', "client");
	api.add_files('client/templates/pets/pets.html', "client");
	api.add_files('client/templates/pets/pets.js', "client");
	api.add_files('client/templates/pets/individual_pet.html', "client");
	api.add_files('client/templates/pets/individual_pet.js', "client");
	api.add_files('client/templates/pets/save_pet.html', "client");
	api.add_files('client/templates/pets/save_pet.js', "client");

	api.add_files('client/templates/food/food.html', "client");
	api.add_files('client/templates/food/individual_food.html', "client");
	api.add_files('client/templates/food/save_food.html', "client");    
	api.add_files('client/templates/food/save_food.js', "client"); 
    
    api.export("Pets");
    api.export("Food");
    api.export("Pet");
    api.export("Router");
    api.export("Template");
});
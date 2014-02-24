Package.describe({
    summary: "Hooray for virtual pets!"
});

Package.on_use(function (api) {
	api.add_files("lib/models.js", ["client", "server"]);

	api.add_files('client/giraffe.png', "client");
	api.add_files('client/monkey.png', "client");
	api.add_files('client/rhino.png', "client");
	api.add_files('client/fence.png', "client");

	api.add_files("client/jquery.rotate.js", "client");
    api.add_files('client/pet.js', "client");
    api.add_files('client/pets.css', "client");

    api.add_files("server/bootstrap.js", "server");

    api.export("MeteorPet");
    api.export("Pets");
    api.export("Food");
});
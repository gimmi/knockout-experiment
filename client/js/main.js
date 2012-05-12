define(function (require) {
	var ko = require('knockout'),
		AppController = require('AppController'),
		StringTemplateEngine = require('StringTemplateEngine');

	ko.setTemplateEngine(new StringTemplateEngine());

	var appController = new AppController();
	appController.loadTree();
	ko.applyBindings(appController);
});

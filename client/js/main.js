require(['knockout', 'AppController', 'BottomScrollBindingHandler', 'StringTemplateEngine', 'crossroads', 'hasher', 'domReady!'], function (ko, AppController, BottomScrollBindingHandler, StringTemplateEngine, crossroads, hasher) {
	ko.bindingHandlers.bottomScroll = new BottomScrollBindingHandler();

	ko.setTemplateEngine(new StringTemplateEngine());

	var appController = new AppController();
	appController.loadTree();
	ko.applyBindings(appController);

	crossroads.addRoute('tasks', function () {
		console.log('tasks');
	});
	crossroads.addRoute('milestones', function () {
		console.log('milestones');
	});
	if (!hasher.getHash()) {
		hasher.setHash('tasks');
	}
	hasher.initialized.add(function (newHash) {
		crossroads.parse(newHash);
	});
	hasher.changed.add(function (newHash) {
		crossroads.parse(newHash);
	});
	hasher.init();
});

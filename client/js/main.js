require(['AppController', 'BottomScrollBindingHandler', 'StringTemplateEngine', 'domReady!'], function (AppController, BottomScrollBindingHandler, StringTemplateEngine) {
	ko.bindingHandlers.bottomScroll = new BottomScrollBindingHandler();

	ko.setTemplateEngine(new StringTemplateEngine());

	var appController = new AppController();
	appController.loadTree();
	ko.applyBindings(appController);
});

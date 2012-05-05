require(['AppController', 'BottomScrollBindingHandler', 'domReady!'], function (AppController, BottomScrollBindingHandler) {
	ko.bindingHandlers.bottomScroll = new BottomScrollBindingHandler();
	var appController = new AppController();
	appController.loadTree();
	ko.applyBindings(appController);
});

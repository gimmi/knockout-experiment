require(['AppController', 'BottomScrollBindingHandler', 'domReady!'], function (AppController, BottomScrollBindingHandler) {
	ko.bindingHandlers.bottomScroll = new BottomScrollBindingHandler();
	ko.applyBindings(new AppController());
});
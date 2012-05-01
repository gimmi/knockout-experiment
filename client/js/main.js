require(['AppController', 'BottomScrollBindingHandler'], function (AppController, BottomScrollBindingHandler) {
	ko.bindingHandlers.bottomScroll = new BottomScrollBindingHandler();
	ko.applyBindings(new AppController());
});
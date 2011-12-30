trackr = window['trackr'] || {};

trackr.on = {
	nodeSelected: new signals.Signal(),
	taskSelected: new signals.Signal()
};

trackr.main = function(rpcUrl) {
	this.server = new JsonRpc(rpcUrl);
	ko.applyBindings(new trackr.AppController());
};
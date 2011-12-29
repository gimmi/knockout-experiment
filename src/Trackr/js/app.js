trackr = { };

trackr.AppController = function(server) {
	this._server = server;

	this.nodes = ko.observableArray();

	this.loadTree();
};

trackr.AppController.prototype = {
	loadTree: function() {
		this._server.call('getTree', function(datas) {
			this.nodes(_(datas).map(function(data) {
				return new trackr.TreeNodeViewModel(data);
			}, this));
		}, this);
	}
};

trackr.TreeNodeViewModel = function(data) {
	this.text = ko.observable(data.text);
	this.expanded = ko.observable(false);
	this.children = ko.observableArray(_(data.children).map(function(child) { return new trackr.TreeNodeViewModel(child); }));
	this.isLeaf = ko.computed(function() { return this.children().length === 0; }, this);
};

trackr.TreeNodeViewModel.prototype = {
	click: function() {
		this.expanded(!this.expanded());
	}
};

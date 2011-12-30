trackr = {
	on: {
		nodeSelected: new signals.Signal(),
		taskSelected: new signals.Signal()
	},
	main: function (rpcUrl) {
		this.server = new JsonRpc(rpcUrl);
		ko.applyBindings(new trackr.AppController());
	}
};

trackr.AppController = function() {
	this.nodes = ko.observableArray();
	this.tasks = ko.observableArray();

	trackr.on.nodeSelected.add(this.onNodeSelected, this);
	trackr.on.taskSelected.add(this.onTaskSelected, this);

	this.loadTree();
};

trackr.AppController.prototype = {
	loadTree: function () {
		trackr.server.call('getTree', function (datas) {
			this.nodes(_(datas).map(function (data) {
				return new trackr.TreeNodeViewModel(data);
			}, this));
		}, this);
	},

	onNodeSelected: function (text) {
		trackr.server.call('getTasks', text, function (datas) {
			this.tasks(_(datas).map(function (data) {
				return new trackr.TaskViewModel(data);
			}, this));
		}, this);
	},

	onTaskSelected: function (id) {
		console.log('Task selected: ' + id);
	}
};

trackr.TreeNodeViewModel = function(data) {
	this.text = ko.observable(data.text);
	this.expanded = ko.observable(false);
	this.children = ko.observableArray(_(data.children).map(function(child) { return new trackr.TreeNodeViewModel(child); }, this));
	this.isLeaf = ko.computed(function() { return this.children().length === 0; }, this);
};

trackr.TreeNodeViewModel.prototype = {
	toggleExpanded: function() {
		this.expanded(!this.expanded());
	},
	click: function() {
		trackr.on.nodeSelected.dispatch(this.text());
	}
};

trackr.TaskViewModel = function(data) {
	this.title = ko.observable(data.title);
};

trackr.TaskViewModel.prototype = {
	click: function () {
		trackr.on.taskSelected.dispatch(this.title());
	}
};
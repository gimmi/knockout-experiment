trackr = { };

trackr.AppController = function() {
	this.nodes = ko.observableArray();
	this.tasks = ko.observableArray();

	window.On.nodeSelected.add(this.onNodeSelected, this);

	this.loadTree();
};

trackr.AppController.prototype = {
	loadTree: function () {
		window.Server.call('getTree', function (datas) {
			this.nodes(_(datas).map(function (data) {
				return new trackr.TreeNodeViewModel(data);
			}, this));
		}, this);
	},
	onNodeSelected: function (text) {
		this.tasks.removeAll();
		window.Server.call('getTasks', text, function (datas) {
			_(datas).each(function (data) {
				this.tasks.push(new trackr.TaskViewModel(data));
			}, this);
		}, this);
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
		window.On.nodeSelected.dispatch(this.text());
	}
};

trackr.TaskViewModel = function(data) {
	this.title = ko.observable(data.title);
};

trackr.TaskViewModel.prototype = {
};
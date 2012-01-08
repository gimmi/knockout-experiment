trackr = window['trackr'] || { };

trackr.AppController = function() {
	this.nodes = ko.observableArray();
	this.tasks = ko.observableArray();
	this._nodeId = null;

	trackr.on.nodeSelected.add(this.onNodeSelected, this);

	this.loadTree();
};

trackr.AppController.prototype = {
	loadTree: function() {
		trackr.server.call('getTree', function(datas) {
			this.nodes(_(datas).map(function(data) {
				return new trackr.TreeNodeViewModel(data);
			}, this));
		}, this);
	},

	onNodeSelected: function(text) {
		this._nodeId = text;
		this.getTaskSummaries(0, function(ret) { this.tasks(ret); }, this);
	},

	loadNextPage: function() {
		this.getTaskSummaries(this.tasks().length, function(tasks) {
			_(tasks).each(function(task) { this.tasks.push(task); }, this);
		}, this);
	},

	getTaskSummaries: function(skip, fn, scope) {
		trackr.server.call('getTaskSummaries', skip, 50, this._nodeId, function (datas) {
			fn.call(scope, _(datas).map(function(data) {
				return new trackr.TaskSummaryViewModel(data);
			}, this));
		}, this);
	}
};
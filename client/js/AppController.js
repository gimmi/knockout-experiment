define(['on', 'server', 'TreeNodeViewModel', 'TaskSummaryViewModel'], function (on, server, TreeNodeViewModel, TaskSummaryViewModel) {
	var ret = function () {
		this.nodes = ko.observableArray();
		this.tasks = ko.observableArray();
		this._nodeId = null;

		on.nodeSelected.add(this.onNodeSelected, this);

		this.loadTree();
	};

	ret.prototype = {
		loadTree: function () {
			server.call('getTree', function (datas) {
				this.nodes(_(datas).map(function (data) {
					return new TreeNodeViewModel(data);
				}, this));
			}, this);
		},

		onNodeSelected: function (text) {
			this._nodeId = text;
			this.getTaskSummaries(0, function (ret) { this.tasks(ret); }, this);
		},

		loadNextPage: function () {
			this.getTaskSummaries(this.tasks().length, function (tasks) {
				_(tasks).each(function (task) { this.tasks.push(task); }, this);
			}, this);
		},

		getTaskSummaries: function (skip, fn, scope) {
			server.call('getTaskSummaries', skip, 50, this._nodeId, function (datas) {
				fn.call(scope, _(datas).map(function (data) {
					return new TaskSummaryViewModel(data);
				}, this));
			}, this);
		}
	};
	
	return ret;
});

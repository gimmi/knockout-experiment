trackr = window['trackr'] || {};

trackr.AppController = function () {
	this.nodes = ko.observableArray();
	this.tasks = ko.observableArray();

	trackr.on.nodeSelected.add(this.onNodeSelected, this);

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
		trackr.server.call('getTaskSummaries', 0, 50, text, function (datas) {
			this.tasks(_(datas).map(function (data) {
				return new trackr.TaskSummaryViewModel(data);
			}, this));
		}, this);
	}
};

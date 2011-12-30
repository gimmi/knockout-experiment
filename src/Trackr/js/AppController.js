trackr = window['trackr'] || {};

trackr.AppController = function () {
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

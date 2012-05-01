define(['server', 'TaskDetailViewModel'], function (server, TaskDetailViewModel) {
	var TaskSummaryViewModel = function (data) {
		this.id = ko.observable(data.id);
		this.number = ko.observable(data.number);
		this.title = ko.observable(data.title);
		this.detail = ko.observable();
	};

	TaskSummaryViewModel.prototype = {
		click: function () {
			if (this.detail()) {
				this.detail(null);
				return;
			}
			server.call('getTaskDetail', this.id(), function (data) {
				this.detail(new TaskDetailViewModel(data));
			}, this);
		}
	};

	return TaskSummaryViewModel;
});

trackr = window['trackr'] || {};

trackr.TaskSummaryViewModel = function (data) {
	this.id = ko.observable(data.id);
	this.number = ko.observable(data.number);
	this.title = ko.observable(data.title);
	this.detail = ko.observable();
};

trackr.TaskSummaryViewModel.prototype = {
	click: function () {
		if (this.detail()) {
			this.detail(null);
			return;
		}
		trackr.server.call('getTaskDetail', this.id(), function (data) {
			this.detail(new trackr.TaskDetailViewModel(data));
		}, this);
	}
};

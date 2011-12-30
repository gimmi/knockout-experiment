trackr = window['trackr'] || {};

trackr.TaskSummaryViewModel = function (data) {
	this.id = ko.observable(data.id);
	this.number = ko.observable(data.number);
	this.title = ko.observable(data.title);
};

trackr.TaskSummaryViewModel.prototype = {
	click: function () {
		trackr.on.taskSelected.dispatch(this.id());
	}
};

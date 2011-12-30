trackr = window['trackr'] || {};

trackr.TaskViewModel = function (data) {
	this.title = ko.observable(data.title);
};

trackr.TaskViewModel.prototype = {
	click: function () {
		trackr.on.taskSelected.dispatch(this.title());
	}
};

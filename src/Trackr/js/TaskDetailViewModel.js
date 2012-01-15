define(function () {
	var TaskDetailViewModel = function (data) {
		this.id = ko.observable(data.id);
		this.number = ko.observable(data.number);
		this.title = ko.observable(data.title);
		this.description = ko.observable(data.description);
	};

	TaskDetailViewModel.prototype = {
	};

	return TaskDetailViewModel;
})


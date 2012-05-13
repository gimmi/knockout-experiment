define(function (require) {
	var ko = require('knockout'),
		on = require('on'),
		TaskListViewModel = require('TaskListViewModel'),
		Task = require('Task');

	var Class = function () {
		this.tasks = new TaskListViewModel();
		this.taskController = ko.observable(null);

		on.taskSelected.add(this._taskSelected, this);
	};

	Class.prototype = {
		_taskSelected: function (id) {
			var me = this;

			Task.get(id).then(function (task) {
				me.taskController(task);
			});
		}
	};

	return Class;
});

define(function (require) {
	var ko = require('knockout'),
		on = require('on'),
		TasksController = require('TasksController'),
		TaskController = require('TaskController'),
		Task = require('Task');

	var Class = function () {
		this.tasksController = new TasksController();
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

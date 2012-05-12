define(function (require) {
	var ko = require('knockout'),
		TasksController = require('TasksController');

	var Class = function () {
		this.tasksController = new TasksController();
	};

	Class.prototype = {
	};

	return Class;
});

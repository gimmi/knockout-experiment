define(function (require) {
	var ko = require('knockout'),
		_ = require('underscore'),
		server = require('server'),
		TaskInfo = require('TaskInfo');

	var Class = function () {
		this.filter = ko.observable('');

		ko.computed(this.filter)
			.extend({ throttle: 500 })
			.subscribe(this._loadTasks, this);

		this.tasks = ko.observableArray();

		this._loadTasks();
	};

	Class.prototype = {
		_loadTasks: function () {
			var me = this;

			server.getTasks(me.filter()).then(function (tasks) {
				tasks = _(tasks).map(function (task) {
					return new TaskInfo(task);
				});
				me.tasks(tasks);
			});
		}
	};

	return Class;
});

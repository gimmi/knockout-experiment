define(function (require) {
	var ko = require('knockout'),
		_ = require('underscore'),
		server = require('server');

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
				me.tasks(tasks);
			});
		}
	};

	return Class;
});

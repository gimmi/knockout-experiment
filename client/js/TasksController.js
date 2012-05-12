define(function (require) {
	var ko = require('knockout'),
		_ = require('underscore');

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
			var tasks = [
				{ id: 1, title: 'task 1' },
				{ id: 2, title: 'task 2' }
			];
			tasks = _(tasks).filter(function (task) {
				return task.title.indexOf(this.filter()) != -1;
			}, this);
			this.tasks(tasks);
		}
	};

	return Class;
});
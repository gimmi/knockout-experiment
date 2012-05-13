define(function (require) {
	var ko = require('knockout'),
		jq = require('jquery'),
		_ = require('underscore'),
		on = require('on');

	var Class = function (json) {
		this.id = ko.observable(json.id);
		this.title = ko.observable(json.title);
	};

	Class.fetch = function (filter) {
		return jq.getJSON('/tasks', { filter: filter }).pipe(function (tasks) {
			return _(tasks).map(function (task) {
				return new Class(task);
			});
		});
	};

	Class.prototype = {
		click: function () {
			on.taskSelected.dispatch(this.id());
		}
	};
	return Class;
});

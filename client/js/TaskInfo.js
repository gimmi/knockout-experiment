define(function (require) {
	var ko = require('knockout'),
		on = require('on');

	var Class = function (json) {
		this.id = ko.observable(json.id);
		this.title = ko.observable(json.title);
	};
	Class.prototype = {
		click: function () {
			on.taskSelected.dispatch(this.id());
		}
	};
	return Class;
});

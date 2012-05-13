define(function (require) {
	var ko = require('knockout');

	var Class = function () {
		this.id = ko.observable(1);
		this.title = ko.observable('title');
	};
	Class.prototype = {};
	return Class;
});
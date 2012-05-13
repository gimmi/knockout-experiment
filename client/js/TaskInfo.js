define(function (require) {
	var ko = require('knockout');

	var Class = function (json) {
		this.id = ko.observable(json.id);
		this.title = ko.observable(json.title);
	};
	Class.prototype = {
		click: function () {
			console.log('selected' + this.id());
		}
	};
	return Class;
});

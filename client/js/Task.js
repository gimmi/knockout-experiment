define(function (require) {
	var ko = require('knockout'),
		jq = require('jquery');

	var Class = function (json) {
		this.id = ko.observable(json.id);
		this.title = ko.observable(json.title);
	};

	Class.get = function (id) {
		return jq.getJSON('/task', { id: id }).pipe(function (json) {
			return new Class(json);
		});
	};

	return Class;
});
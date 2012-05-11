define(['knockout', 'on'], function (ko, on) {
	var Class = function (data) {
		this.text = ko.observable(data.text);
		this.expanded = ko.observable(false);
		this.children = ko.observableArray(_(data.children).map(function (child) { return new Class(child); }, this));
		this.isLeaf = ko.computed(function () { return this.children().length === 0; }, this);
	};

	Class.create = function (data) {
		return new Class(data);
	};

	Class.prototype = {
		toggleExpanded: function () {
			this.expanded(!this.expanded());
		},
		click: function () {
			on.nodeSelected.dispatch(this.text());
		}
	};

	return Class;
});


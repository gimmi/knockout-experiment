define(['on'], function (on) {
	var ret = function (data) {
		this.text = ko.observable(data.text);
		this.expanded = ko.observable(false);
		this.children = ko.observableArray(_(data.children).map(function (child) { return new ret(child); }, this));
		this.isLeaf = ko.computed(function () { return this.children().length === 0; }, this);
	};

	ret.prototype = {
		toggleExpanded: function () {
			this.expanded(!this.expanded());
		},
		click: function () {
			on.nodeSelected.dispatch(this.text());
		}
	};

	return ret;
});


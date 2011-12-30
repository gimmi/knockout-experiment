trackr = window['trackr'] || {};

trackr.TreeNodeViewModel = function (data) {
	this.text = ko.observable(data.text);
	this.expanded = ko.observable(false);
	this.children = ko.observableArray(_(data.children).map(function (child) { return new trackr.TreeNodeViewModel(child); }, this));
	this.isLeaf = ko.computed(function () { return this.children().length === 0; }, this);
};

trackr.TreeNodeViewModel.prototype = {
	toggleExpanded: function () {
		this.expanded(!this.expanded());
	},
	click: function () {
		trackr.on.nodeSelected.dispatch(this.text());
	}
};

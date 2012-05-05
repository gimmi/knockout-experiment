define(function (require) {
	var Class = function (name) {
		this._name = name;
	};

	Class._templates = {
		treenode: { text: require('text!../templates/treenode.html'), data: {} }
	};

	Class.hasTemplate = function (name) {
		return !!Class._templates[name];
	};

	Class.prototype = {
		data: function(key, value) {
			var data = Class._templates[this._name].data;

			if (arguments.length === 1) {
				return this._getTemplate()[key];
			}
			this._getTemplate()[key] = value;
		},

		text: function(value) {
			var tpl = Class._templates[this._name];

			if (arguments.length === 0) {
				return tpl.text;
			}
			tpl.text = value;
		}
	};

	return Class;
});

define(function () {
	var ret = function () {
	};
	
	ret.prototype = {
		init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
			element = $(element);
			element.scroll(function () {
				if (element.height() + element.scrollTop() >= element.children().height()) {
					valueAccessor().call(viewModel);
				}
			});
		}
	};

	return ret;
});

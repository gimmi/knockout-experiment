define({
	getTree: function (cb, scope) {
		jQuery.getJSON('/getTree', function (data) {
			cb.call(scope, data);
		});
	},
	getTaskSummaries: function (start, limit, text, cb, scope) {
		jQuery.getJSON('/getTaskSummaries', {start: start, limit: limit, text: text}, function (data) {
			cb.call(scope, data);
		});
	},
	getTaskDetail: function (id, cb, scope) {
		jQuery.getJSON('/getTaskDetail', {id: id}, function (data) {
			cb.call(scope, data);
		});
	}
});

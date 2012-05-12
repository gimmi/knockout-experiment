define(function (require) {
	var jq = require('jquery');

	return {
		getTasks: function (filter) {
			return jq.getJSON('/tasks', { filter: filter });
		},
		getTree: function (cb, scope) {
			jq.getJSON('/getTree', function (data) {
				cb.call(scope, data);
			});
		},
		getTaskSummaries: function (start, limit, text, cb, scope) {
			jq.getJSON('/getTaskSummaries', {start: start, limit: limit, text: text}, function (data) {
				cb.call(scope, data);
			});
		},
		getTaskDetail: function (id, cb, scope) {
			jq.getJSON('/getTaskDetail', {id: id}, function (data) {
				cb.call(scope, data);
			});
		}
	};
});

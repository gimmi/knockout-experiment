module.exports = {
	getTree: function(req, res) {
		res.json([{
			id: '1',
			text: 'Node 1',
			children: [{
				id: '1.1',
				text: 'Node 1.1',
				children: [
					{ id: '1.1.1', text: 'Node 1.1.1', children: [] },
					{ id: '1.1.2', text: 'Node 1.1.2', children: [] }
				]
			}, {
				id: '1.2',
				text: 'Node 1.2',
				children: []
			}, {
				id: '1.3',
				text: 'Node 1.3',
				children: []
			}]
		}, {
			id: '2',
			text: 'Node 2',
			children: [
				{ id: '2.1', text: 'Node 2.1', children: [] },
				{ id: '2.2', text: 'Node 2.2', children: [] },
				{ id: '2.3', text: 'Node 2.3', children: [] }
			]
		}]);
	},

	getTaskSummaries: function(req, res) {
		var start = Number(req.param('start', 0)),
			limit = Number(req.param('limit', 50)),
			text = req.param('limit', 'txt'),
			result = [];

		for (var i = start; i < start + limit; i++) {
			result.push({
				id: '' + i,
				number: i,
				title: text + ", task " + i
			});
		}
		res.json(result);
	},

	getTaskDetail: function(req, res) {
		var id = req.param('id', '');

		res.json({
			id: id,
			number: 1,
			title: "Task " + id,
			description: "Task " + id + " description"
		});
	}
};

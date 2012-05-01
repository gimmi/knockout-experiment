exports.rpc = function(req, res) {
	var result;
	if (req.body.method === 'getTree') {
		result = [{
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
		}];
	} else if (req.body.method === 'getTaskSummaries') {
		result = [];
		for (var i = req.body.params[0]; i < req.body.params[0] + req.body.params[1]; i++) {
			result.push({
				id: '' + i, 
				number: i, 
				title: req.body.params[2] + ", task " + i
			});
		}
	} else if (req.body.method === 'getTaskDetail') {
		result = {
			id: req.body.params[0],
			number: 1,
			title: "Task " + req.body.params[0],
			description: "Task " + req.body.params[0] + " description"
		};
	}
	res.json({
		jsonrpc: req.body.jsonrpc,
		id: req.body.id,
		result: result
	});
};

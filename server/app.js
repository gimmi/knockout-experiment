var express = require('express'),
	routes = require('./routes');

var app = express.createServer();

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view options', {
		layout: false
	});
	app.set('view engine', 'ejs');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/../client'));
});

app.configure('development', function() {
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
});

app.configure('production', function() {
	app.use(express.errorHandler());
});

app.get('/tasks', routes.tasks);
app.get('/task', routes.task);
app.get('/getTree', routes.getTree);
app.get('/getTaskSummaries', routes.getTaskSummaries);
app.get('/getTaskDetail', routes.getTaskDetail);

app.listen(3000, function() {
	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

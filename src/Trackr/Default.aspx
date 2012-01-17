<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Trackr.Default" %>
<html>
	<head>
		<title>Trackr</title>
		<link type="text/css" rel="stylesheet" href="css/reset.css" />
		<link type="text/css" rel="stylesheet" href="css/style.css" />
		<script type="text/javascript" src="lib/underscore.js" > </script>
		<script type="text/javascript" src="lib/jquery-1.7.1.js"> </script>
		<script type="text/javascript" src="lib/jsonrpc-0.1.3.js"> </script>
		<script type="text/javascript" src="lib/knockout-2.0.0.debug.js"> </script>
		<script type="text/javascript" src="lib/signals.js"> </script>
		<script type="text/javascript" src="lib/require.js"> </script>
		<script type="text/javascript">
			require.config({ baseUrl: 'js' });

			require(['AppController', 'bindingHandlers/bottomScroll'], function(AppController) {
				ko.applyBindings(new AppController());
			});
		</script>
	</head>
	<body>
		<div id="main">
			<div id="top">Header</div>
			<div id="nodes">
				<ul class="nodes" data-bind="template: { name: 'node-template', foreach: nodes }"></ul>
			</div>
			<div id="tasks" data-bind="bottomScroll: loadNextPage">
				<ul class="tasks" data-bind="template: { foreach: tasks }">
					<li class="task">
						<div class="tasksummary" data-bind="click: click">
							<span data-bind="text: number"></span>
							<span data-bind="text: title"></span>
						</div>
						<div data-bind="with: detail">
							<div class="taskdetail">
								<span data-bind="text: number"></span>
								<span data-bind="text: title"></span>
								<div data-bind="text: description"></div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<script type="text/html" id="node-template">
			<li class="node">
				<span data-bind="css: { leaf: isLeaf, expanded: expanded }, click: toggleExpanded">#</span>
				<span data-bind="text: text, click: click"></span>
				<div data-bind="if: expanded">
					<ul class="nodes" data-bind="template: { name: 'node-template', foreach: children }"></ul>
				</div>
			</li>
		</script>
	</body>
</html>
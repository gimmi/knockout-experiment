<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Trackr.Default" %>
<html>
	<head>
		<title>Trackr</title>
		<script type="text/javascript" src="lib/underscore.js" > </script>
		<script type="text/javascript" src="lib/jquery-1.7.1.js"> </script>
		<script type="text/javascript" src="lib/jsonrpc-0.1.3.js"> </script>
		<script type="text/javascript" src="lib/knockout-2.0.0.debug.js"> </script>
		<script type="text/javascript" src="lib/signals.js"> </script>
		<script type="text/javascript" src="js/app.js"> </script>
		<script type="text/javascript" src="js/AppController.js"> </script>
		<script type="text/javascript" src="js/TaskViewModel.js"> </script>
		<script type="text/javascript" src="js/TreeNodeViewModel.js"> </script>
		<script type="text/javascript">
			$(function () {
				trackr.main('<%= RpcUrl %>');
			});
		</script>
	</head>
	<body class="trackr">
		<div class="nodes">
			<ul data-bind="template: { name: 'node-template', foreach: nodes }"></ul>
		</div>
		<ul class="tasks" data-bind="template: { name: 'task-template', foreach: tasks }"></ul>

		<script type="text/html" id="node-template">
			<li class="node">
				<span data-bind="css: { leaf: isLeaf, expanded: expanded }, click: toggleExpanded">#</span>
				<span data-bind="text: text, click: click"></span>
				<div data-bind="if: expanded">
					<ul data-bind="template: { name: 'node-template', foreach: children }"></ul>
				</div>
			</li>
		</script>

		<script type="text/html" id="task-template">
			<li class="task">
				<span data-bind="text: title, click: click"></span>
			</li>
		</script>
	</body>
</html>
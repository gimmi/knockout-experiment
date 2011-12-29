<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Trackr.Default" %>
<html>
	<head>
		<title>Trackr</title>
		<script type="text/javascript" src="lib/underscore.js" > </script>
		<script type="text/javascript" src="lib/jquery-1.7.1.js"> </script>
		<script type="text/javascript" src="lib/jsonrpc-0.1.3.js"> </script>
		<script type="text/javascript" src="lib/knockout-2.0.0.debug.js"> </script>
		<script type="text/javascript" src="js/app.js"> </script>
		<script type="text/javascript">
			$(function() {
				var server = new JsonRpc('<%= RpcUrl %>');
				ko.applyBindings(new trackr.AppController(server));
			});
		</script>
	</head>
	<body>
		<div>
			<ul data-bind="template: { name: 'node-template', foreach: nodes }"></ul>
		</div>

		<script type="text/html" id="node-template">
			<li>
				<span data-bind="text: text, click: click"></span>
				<div data-bind="if: expanded">
					<ul data-bind="template: { name: 'node-template', foreach: children }"></ul>
				</div>
			</li>
		</script>
	</body>
</html>
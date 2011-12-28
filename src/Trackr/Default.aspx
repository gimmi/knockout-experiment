<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Trackr.Default" %>
<html>
	<head>
		<title>Trackr</title>
		<script type="text/javascript" src="jsonrpc-0.1.0/jsonrpc.js"> </script>
		<script type="text/javascript" src="knockout-2.0.0.debug.js"> </script>
		<script type="text/javascript">
			var server = new JsonRpc('<%= AppPath %>');
			server.call('echo', 'Hello', function (ret) {
				console.log(ret);
			});
		</script>
	</head>
	<body></body>
</html>
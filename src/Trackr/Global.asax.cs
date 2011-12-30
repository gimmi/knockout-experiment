using System;
using System.Web;
using JsonRpcHandler;
using JsonRpcHandler.Configuration;

namespace Trackr
{
	public class Global : HttpApplication
	{
		protected void Application_Start(object sender, EventArgs e)
		{
			LambdaRpcConfiguration cfg = new LambdaRpcConfiguration()
				.Register<Service>("echo", x => x.Echo(null))
				.Register<Service>("getTaskSummaries", x => x.GetTaskSummaries(null))
				.Register<Service>("getTree", x => x.GetTree());
			JsonRpcHttpHandler.SetConfiguration(cfg);
		}

		protected void Session_Start(object sender, EventArgs e) {}

		protected void Application_BeginRequest(object sender, EventArgs e) {}

		protected void Application_AuthenticateRequest(object sender, EventArgs e) {}

		protected void Application_Error(object sender, EventArgs e) {}

		protected void Session_End(object sender, EventArgs e) {}

		protected void Application_End(object sender, EventArgs e) {}
	}
}
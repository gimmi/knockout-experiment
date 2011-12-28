using System;
using System.Web.UI;

namespace Trackr
{
	public partial class Default : Page
	{
		public string AppPath
		{
			get
			{
				var url = new Uri(Request.Url.GetLeftPart(UriPartial.Authority));
				url = new Uri(url, Request.ApplicationPath);
				url = new Uri(url, "rpc");
				return url.ToString();
			}
		}
	}
}
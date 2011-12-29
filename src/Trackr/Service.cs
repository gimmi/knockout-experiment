using System;

namespace Trackr
{
	public class Service
	{
		public string Echo(string v)
		{
			return v;
		}

		public TreeNode[] GetTree()
		{
			return new[] {
				new TreeNode {
					Text = "Node 1",
					Children = new[] {
						new TreeNode {
							Text = "Node 1.1",
							Children = new[] {
								new TreeNode {
									Text = "Node 1.1.1"
								}, new TreeNode {
									Text = "Node 1.1.2"
								}, new TreeNode {
									Text = "Node 1.1.3"
								}
							}
						}, new TreeNode {
							Text = "Node 1.2"
						}, new TreeNode {
							Text = "Node 1.3"
						}
					}
				},
				new TreeNode {
					Text = "Node 2",
					Children = new[] {
						new TreeNode {
							Text = "Node 2.1"
						}, new TreeNode {
							Text = "Node 2.2"
						}, new TreeNode {
							Text = "Node 2.3"
						}
					}
				}
			};
		}

		public class TreeNode
		{
			public Guid Id = Guid.NewGuid();
			public string Text;
			public TreeNode[] Children = new TreeNode[0];
		}
	}
}
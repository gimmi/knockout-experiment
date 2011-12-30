using System;
using System.Collections.Generic;

namespace Trackr
{
	public class Service
	{
		public string Echo(string v)
		{
			return v;
		}

		public IEnumerable<TaskSummary> GetTaskSummaries(string text)
		{
			var tasks = new List<TaskSummary>();
			for(int i = 0; i < 100; i++)
			{
				tasks.Add(new TaskSummary { Number = i, Title = text + ", task " + i });
			}
			return tasks;
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

		public class TaskSummary
		{
			public Guid Id = Guid.NewGuid();
			public int Number;
			public string Title;
		}

		public class TreeNode
		{
			public Guid Id = Guid.NewGuid();
			public string Text;
			public TreeNode[] Children = new TreeNode[0];
		}
	}
}
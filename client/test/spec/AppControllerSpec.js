require(['AppController', 'TreeNodeViewModel', 'server'], function (AppController, TreeNodeViewModel, server) {

	describe("AppController", function () {
		var target;

		beforeEach(function () {
			target = new AppController();
		});

		it("should load tree", function () {
			spyOn(server, 'getTree').andCallFake(function (cb, scope) {
				cb.call(scope, ['tnd']);
			});
			spyOn(TreeNodeViewModel, 'create');

			target.loadTree();

			expect(server.getTree).toHaveBeenCalledWith(jasmine.any(Function), target);
			expect(TreeNodeViewModel.create).toHaveBeenCalledWith('tnd');
		});
	});
});

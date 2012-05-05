require(['AppController', 'TreeNodeViewModel', 'server'], function (AppController, TreeNodeViewModel, server) {

	describe("AppController", function () {
		var target;

		beforeEach(function () {
			target = new AppController();
		});

		it("should load tree", function () {
			spyOn(server, 'call').andCallFake(function (m, cb, scope) {
				cb.call(scope, ['tnd']);
			});
			spyOn(TreeNodeViewModel, 'create');

			target.loadTree();

			expect(server.call).toHaveBeenCalledWith('getTree', jasmine.any(Function), target);
			expect(TreeNodeViewModel.create).toHaveBeenCalledWith('tnd');
		});
	});
});

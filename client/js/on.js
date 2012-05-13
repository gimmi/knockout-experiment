define(function (require) {
	var signals = require('signals');

	return {
		taskSelected: new signals.Signal()
	};
});

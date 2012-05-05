define(['StringTemplateSource'], function (StringTemplateSource) {
	var Class = function () {
	};

	Class.prototype = new ko.nativeTemplateEngine();

	Class.prototype.makeTemplateSource = function(template) {
		if(StringTemplateSource.hasTemplate(template)){
			return new StringTemplateSource(template);
		}
		return ko.nativeTemplateEngine.prototype.makeTemplateSource.call(this, template);
	};

	return Class;
});

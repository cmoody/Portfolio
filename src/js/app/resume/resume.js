define(function(require) {
	"use strict";

	// Vendor
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Template
    var tpl = require('text!app/resume/tpl/resume.html');
    var template = _.template(tpl);
	
	return Backbone.View.extend({
		className: 'resume',

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template());
			
			return this;
		}
	});

});
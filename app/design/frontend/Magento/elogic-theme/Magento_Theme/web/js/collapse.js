define([
	'jquery',
	'jquery/ui'
], function ($) {
	'use strict';

	$.widget('elogic.collapse', {
		options: {
			trigger: '',
			press: '',
		},

			$(this.options.trigger).click(() => {
				$(this.options.trigger).toggleClass("opened");
				$(this.options.press).toggleClass("collapsible-show");
			});

				return $.elogic.collapse;
			}

	});
});

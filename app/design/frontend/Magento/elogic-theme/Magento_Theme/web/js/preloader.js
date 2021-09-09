define([
	'jquery',
	'jquery/ui'
], function ($) {
	'use strict';

	$.widget('elogic.preloader', {
		options: {
			body: '',
			hide: ''
		},
        
		_create: function () {
            $(this.options.body).attr("cz-shortcut-listen", "true"); {
                $(this.options.hide).fadeOut(1200, "linear", "complete");
				$(this.options.body).css("overflow","visible");
            }
		},
	});
	return $.elogic.preloader;
});


define([
    'jquery',
    'jquery/ui',
    'select',
    'domReady!'
], function ($) {
    'use strict';

    $.widget('elogic.select', {
        options: {
            template:"",
            selectOptions:{ 
                width: 'resolve',
                minimumResultsForSearch: -1
            }
        },
        _create: function () {
            $(this.options.template).select2(this.options.selectOptions);
        },
    });

    return $.elogic.select;
}); 
define([
    'jquery',
    'matchMedia',
    'jquery/ui',
    'collapsible',
    'domReady!'
], function ($, mediaCheck) {
  'use strict';

    $.widget('elogic.footerdropdown', {

        options: {
            template: '',
            accordionOptions: {
                active: [0],
                collapsible: true,
                openedState: "active",
                multipleCollapsible: true,
                animate: {
                    easing: "easeOutCubic",
                    duration:"300"
                }
            }
        },

        _create: function () {
            mediaCheck({
                media: '(min-width: 767px)',
                entry: function () {
                    $(this.options.template).accordion( "destroy" );
                }.bind(this),
                exit: function () {
                    $(this.options.template).accordion(this.options.accordionOptions);
                }.bind(this)
            });
        }
    });
    return $.elogic.footerdropdown;

});
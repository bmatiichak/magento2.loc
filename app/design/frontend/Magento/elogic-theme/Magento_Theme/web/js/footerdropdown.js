define([
    'jquery',
    'matchMedia',
    'collapsible',
    'jquery/ui',
    'domReady!'

], function ($ , mediaCheck) {
    'use strict';

    $.widget('elogic.footerdropdown', {
        options: {
            template: '',
            collapsibleOptions: {
                active: false,
                collapsible: true,
                openedState: "active",
                multipleCollapsible: true,
                animate: {
                    easing: "easeOutCubic",
                    duration: "300",
                },
            },
        },


        _create: function () {

            $(this.options.template).collapsible(this.options.collapsibleOptions);

            mediaCheck({
                media: '(min-width: 767px)',
                entry: function () {
                    $(this.options.template).collapsible( "destroy" );
                }.bind(this),
                exit: function () {
                    $(this.options.template).collapsible(this.options.collapsibleOptions);
                }.bind(this)
            });
        },
    }) ;
    return $.elogic.footerdropdown;
});
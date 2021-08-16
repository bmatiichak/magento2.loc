

define([
    'jquery',
    'matchMedia',
    'jquery-ui-modules/widget',
    'domReady!'
], function ($, mediaCheck) {
    'use strict';

    $.widget('elogic.scroll', {

        _create: function () {
            mediaCheck({
                media: '(min-width: 767px)',
                entry: function () {
                    var elem = $(this.element);
                    $(window).on('scroll',function(){
                        if ($(this).scrollTop() > 500) {
                            elem.show();
                        } else {
                            elem.hide();
                        }
                    })
                    elem.click(function() {
                        $("html, body").animate({ scrollTop: 0 }, "slow");
                        return false;
                    })
                }.bind(this),
                exit: function () {}
            })
        }
    });
    return $.elogic.scroll;
});
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

        _create: function () {
            $(this.options.trigger).click(()=> {
                if ($(this.options.trigger).hasClass("collapsed")) {
                    $(this.options.press).css("transform","translateX(0)");
                    $(this.options.trigger).removeClass("collapsed");
                    $(this.options.trigger).addClass("opened");
                } else {
                    $(this.options.press).css("transform","translateX(90%)");
                    $(this.options.trigger).removeClass("opened");
                    $(this.options.trigger).addClass("collapsed");
                }
            });
        },
    });

  return $.elogic.collapse;
});
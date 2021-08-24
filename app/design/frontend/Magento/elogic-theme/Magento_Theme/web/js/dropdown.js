define([
  'jquery',
  'jquery/ui'
], function ($) {
  'use strict';

    $.widget('elogic.dropdown', {
        options: {
            trigger: '',
            toggle: '',
        },

        _create: function () {
            $(this.options.trigger).click(()=> {
                $(this.options.toggle).slideToggle();
            });
        },
    });

  return $.elogic.dropdown;
});
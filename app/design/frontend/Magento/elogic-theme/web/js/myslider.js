define([
    'jquery',
    'jquery/ui',
    'slick',
    'domReady!'
], function ($) {
    'use strict';

    $.widget('elogic.slider', {
        options: {
            selector:"",
            sliderOptions:{ 
                infinite: true,
                prevArrow: '<div class="slick-prev myprev ">Prev</div>',
                nextArrow: '<div class="slick-next mynext ">Next</div>'
            }
        },

        _create: function () {
            $(this.options.selector).slick(this.options.sliderOptions);
        },
    });

    return $.elogic.slider;
}); 
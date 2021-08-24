
define([
    'jquery',
    'jquery/ui',
    'domReady!'
], function ($) {
    'use strict';

    $.widget('elogic.sticky', {
        options: {},

        _create: function () {
            $(window).on('scroll',function(){
                if ($(this).scrollTop() > $('.header.content').outerHeight()){
                    $('.page-header').addClass("sticky");
                }
                else{
                    $('.page-header').removeClass("sticky");
                }
            });
        }
    });
    return $.elogic.sticky;
});
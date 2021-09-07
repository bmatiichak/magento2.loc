
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
                    $('.page-wrapper').css("paddingTop", $('.header.content').outerHeight());
                }
                else{
                    $('.page-header').removeClass("sticky");
                    $('.page-wrapper').css("paddingTop", "0 ");
                }
            });
        }
    });
    return $.elogic.sticky;
});
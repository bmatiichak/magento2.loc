define([
    'jquery',
    'jquery/ui',
    'domReady!'
], function($){
    'use strict';

    $.widget('elogic.modalselect', {
        options: {
            optionsContainer: '',
            optionsList: '',
            initialSelect: ''
        },

        _create: function(){
            const optionsContainer = this.options.optionsContainer;
            const optionsList = this.options.optionsList;
            const initialSelect = this.options.initialSelect;

            $(document).on('click', initialSelect, function(){
                $(optionsContainer).toggleClass('active');

                $(initialSelect).toggleClass('rotateArrow');
            });

            $(document).on('click', `${optionsContainer} > label${optionsList}`, function(e){
                $(initialSelect).html(e.currentTarget.lastElementChild.textContent);
                $(optionsContainer).removeClass('active');
            });
        }
    });

    return $.elogic.modalselect;
});
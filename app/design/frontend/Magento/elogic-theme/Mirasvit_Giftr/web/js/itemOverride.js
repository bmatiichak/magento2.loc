// removed unnecessary dependencies and variables (5,11)
// added login page & registry page variables, login check and created mixin(19-22)
// removed not used functions throughout whole document
// created createModal, showModal, defineUserBehaviour functions (70, 79, 83)
define([
    'jquery',
    'mage/url',
    'underscore',
    'Magento_Customer/js/customer-data',
    'Magento_Ui/js/modal/modal',
], function($, urlBuilder, _, customerData) {
    'use strict';

    Storage.prototype.getObject = function(key) { // extended localStorage to be able to get objects and their children objects etc.
        var value = this.getItem(key);
        return value && JSON.parse(value);
    };

    const loginPage = urlBuilder.build('customer/account/login'), // ajax call for login url
        registryPage = urlBuilder.build('giftr/registry'),
        cacheStorage = localStorage.getObject('mage-cache-storage'),

        mixin = {

            defaults: {
                hasRegistries: false,
                url: null,
                registries: [],
                selected: [],
                loginUrl: null,
                newRegistryUrl: null
            },

            initialize: function () {
                this._super();
                this.initRegistries();
            },

            initRegistries: function() {
                var customerRegistries = customerData.get('gift-registry')();

                this.isLoggedIn(customerRegistries.is_logged_in || false);
                this.registries(customerRegistries.registries || []);
                this.selected(customerRegistries.selected || []);
                this.hasRegistries(this.registries().length > 0);
            },

            initObservable: function() {
                this._super()
                    .observe([
                        'selected',
                        'registries',
                        'hasRegistries',
                        'isLoggedIn'
                    ]);

                return this;
            },

            defineBehaviour: function(data, event) {
                this.initRegistries();

                if (this.registries().length == 1) {
                    event.stopPropagation();
                    this.addProduct();
                }
            },

            getData: function() {
                var data = $('#product_addtocart_form').serializeArray();
                if (_.size(this.selected()) > 0) {
                    data.push({name: 'registries', value: _.map(this.selected(), function(value) { return value; })});
                }

                return data;
            },

            createModal:function() {
                $('.giftr-list').modal({
                    type: 'popup', 
                    responsive: true,
                    modalClass: 'modal__giftr',
                    buttons: [],            
                });
            },

            showModal:function() {
                $('.giftr-list').modal('openModal');
            },

            addProduct: function() {
                if (!$('#product_addtocart_form').valid()) {
                    return false;
                }

                $.ajax({
                    url: this.url,
                    method: 'POST',
                    data: this.getData(),
                    dataType: 'json',
                    showLoader: true,
                    success: function (response) {
                        var giftr = $('[data-block="addtogiftr"]');
                        giftr.find('[data-role="dropdownDialog"]').dropdownDialog("close");
                        $('.giftr-dropdown').hide();
                        if (response.status == this.login) {
                            setLocation(response.message);
                        }
                    }
                });
            },


            defineUserBehaviour: function () {
                this.initRegistries();
                if (!Object.keys(cacheStorage).length) { //if cache storage is somehow empty
                    window.location.href = loginPage;
                } else if (cacheStorage['gift-registry'].is_logged_in) { // if user is logged in
                    if(this.registries().length == 1){
                        this.addProduct();
                    } else if (this.registries().length == 0) {
                        window.location.href = registryPage;
                    } else {
                        this.createModal();
                        this.showModal();
                    }
                } else {
                    window.location.href = loginPage; // if user is not logged in
                }
            }
        };

    return function (target) {
        return target.extend(mixin);
    };

});

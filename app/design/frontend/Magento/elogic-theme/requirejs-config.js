
var config = {
    map: {
        "*": {
            slick: 'js/vendor/slick.min',
            select: 'js/vendor/select2.full',
            myslider: 'js/myslider',
            myselect: 'js/myselect',
            footerdropdown: 'Magento_Theme/js/footerdropdown',
            scrolltop: 'Magento_Theme/js/scrolltop',
            collapse: 'Magento_Theme/js/collapse',
            dropdown: 'Magento_Theme/js/dropdown',
            stickyheader: 'Magento_Theme/js/stickyheader',
            modalselect: 'Mirasvit_Giftr/js/modalselect'
        }
    },
    shim: {
        slick: {
            deps: ['jquery'],
        },
        select: {
            deps: ['jquery'],
        }
    },
    config: {
        mixins: {
            'Mirasvit_Giftr/js/item': {
                'Mirasvit_Giftr/js/itemOverride': true
            }
        }
    }
};
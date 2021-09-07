
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
            stickyheader: 'Magento_Theme/js/stickyheader'
        }
    },
    shim: {
        slick: {
            deps: ['jquery'],
        },
        select: {
            deps: ['jquery'],
        }
    }
};
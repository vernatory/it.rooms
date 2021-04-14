(function ($) {
    'use strict';

    $(window).on('load', function () {

        $('#ant109_header-mobile-menu').meanmenu({
            meanMenuContainer: '.ant109_header-mobile-menu',
            meanScreenWidth: "991",
            onePage: false
        });

        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 245) {
                $(".ant109_header-header-sticky").removeClass("ant109_header-sticky-bar");
            } else {
                $(".ant109_header-header-sticky").addClass("ant109_header-sticky-bar");
            }
        });

    });

})(jQuery);
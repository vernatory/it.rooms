(function ($) {
    "use strict";

    $(window).on('load', function () {
        if ($(".ant092_testimonials-wrap").length != 0) {
            $(".ant092_testimonials-wrap").owlCarousel({
                // items: 2,
                autoPlay: false,
                navigation: false,
                navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
                pagination: true,
                nav: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    980: {
                        items: 2
                    }
                },
            });
        }
    });

})(jQuery);
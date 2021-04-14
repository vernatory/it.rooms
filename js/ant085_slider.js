(function ($) {
    "use strict";

    $(window).on('load', function () {
        if ($(".ant085_slider-company-slider").length != 0) {
            $(".ant085_slider-company-slider").owlCarousel({
                navigation: true, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                pagination: false,
                items: 1,
                nav: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    1210: {
                        items: 1,
                    }
                },
                //navigation : true,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                autoPlay: true
            });
        }
    });

})(jQuery);
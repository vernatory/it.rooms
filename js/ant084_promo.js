(function ($) {
    "use strict";

    $(window).on('load', function () {
        if ($('.ant084_promo-wide-container').length !== 0) {
            $('.ant084_promo-wide-container').css({
                'height': $(window).height()
            });
            $(window).on('resize', function () {
                $('.ant084_promo-wide-container').css({
                    'height': $(window).height()
                });
            });
            if ($(window).width() > 767) {
                $('.ant084_promo-wide-container-768').css({
                    'height': $(window).height()
                });
                $(window).on('resize', function () {
                    $('.ant084_promo-wide-container-768').css({
                        'height': $(window).height()
                    });
                });
            }
        }
        
        if ($('#ant084_promo-slides').length !== 0) {
            $('#ant084_promo-slides').superslides({
                pagination: false,
                play: 3900
            });
        }

        if ($('.ant084_promo-text-scroll-slider').length !== 0) {
            var dd = $('.ant084_promo-text-scroll-slider').easyTicker({
                direction: 'up',
                // easing: 'easeInOutExpo',
                speed: 'slow',
                interval: 3900,
                height: 'auto',
                visible: 1,
                mousePause: 0,
                controls: {
                    up: '.up',
                    down: '.down',
                    toggle: '.toggle',
                    stopText: 'Stop !!!'
                }
            }).data('easyTicker');
        }
    });

})(jQuery);
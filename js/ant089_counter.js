(function ($) {
    "use strict";

    $(window).on('load', function () {
        if ($(".ant089_counter-count-number").length != 0) {
            $(".ant089_counter-count-number").appear(function () {
                $('.ant089_counter-count-number').each(function () {
                    var datacount = $(this).attr('data-count');
                    $(this).find('.ant089_counter-counter').delay(6000).countTo({
                        from: 10,
                        to: datacount,
                        speed: 3000,
                        refreshInterval: 50,
                    });
                });
            });
        }
    });

})(jQuery);
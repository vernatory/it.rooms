    
(function ($) {
    'use strict';

    $(window).on('load', function () {

        if ($('#ant100_projects-propertyThumbnails').length > 0) {
            var $gal = $("#ant100_projects-propertyThumbnails"),
                galW = $gal.outerHeight(true),
                galSW = $gal[0].scrollHeight,
                wDiff = (galSW / galW) - 1,
                mPadd = 60,
                damp = 80,
                mX = 0,
                mX2 = 0,
                posX = 0,
                mmAA = galW - (mPadd * 2),
                mmAAr = (galW / mmAA);
            $gal.mousemove(function (e) {
                mX = e.pageY - $(this).parent().offset().top - this.offsetTop;
                mX2 = Math.min(Math.max(0, mX - mPadd), mmAA) * mmAAr;
            });
            setInterval(function () {
                posX += (mX2 - posX) / damp;
                $gal.scrollTop(posX * wDiff);
            }, 10);
        }

        $('.ant100_projects-shortcode-gallery').magnificPopup({
            delegate: 'a.ant079_projects-popup-img',
            type: 'image',
            tLoading: 'Загрузка изображения #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">Изображение #%curr%</a> не загрузилось.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small>от Олег Петров</small>';
                }
            }
        });

    });

})(jQuery);
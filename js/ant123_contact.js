(function ($) {
    "use strict";

    var $contactForm = $('#ant123_contact-form');
    var $message = $('.ant123_contact-info');
    var $button = $('#ant123_contact-form button');

    if ($contactForm.length > 0) {

        $contactForm.on('submit', function (e) {
            e.preventDefault();

            $.ajax({
                type: $contactForm.attr('method'),
                url: $contactForm.attr('action'),
                data: $contactForm.serialize(),
                success: function (data) {
                    $message.show();
                    $button.attr('disabled', 'disabled');
                },
                error: function(error) {
                    alert('Модуль отправки сообщения настраивается. Пожалуйста позвоните по номеру 8-977-01-12345');
                }
            });
        });
    }

})(jQuery);
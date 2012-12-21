!function ($) {
    "use strict";

    $(function() {
        $('.cart-box').each(function() {
            var el = $(this);
            el.affix({
                offset: el.position().top - 100
            });
        });

        var nav = $('.secondary-navigation.toffee');

        $('.toffe').each(function() {
            $(this).click(function() {
                nav.slideDown();
            });
        });

        nav.mouseout(function() {
            nav.slideUp();
        });
    });
}(window.jQuery);

!function ($) {
    "use strict";

    $('.cart-box').each(function() {
        var el = $(this);
        el.affix({
            offset: el.position().top - 100
        });
    });
}(window.jQuery);

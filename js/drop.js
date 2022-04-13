const $=require("jquery");
(function ($) {
    $(".dropdown").on('mouseover', function () {
        $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
        $(this).addClass('open');
    });
    $(".dropdown").on('mouseleave', function () {
        $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
        $(this).removeClass('open');
    });
})(jQuery);
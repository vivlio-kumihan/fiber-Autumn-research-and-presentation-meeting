(function($) {

    $(function () {
	if ($('#global-nav').hasClass('jusho')) {
	$('.sub-menu.jusho > a').addClass('is-active');
	} else if ($('#global-nav').hasClass('koto')) {
	$('.sub-menu.koto > a').addClass('is-active');
	}
    });

    $(function () {
        $('.sub-menu > a').on('click', function (e) {
            e.preventDefault();
            var $subNav = $(this).next('.sub-menu-nav');
            if ($subNav.css("display") === "none") {
                $(this).addClass('is-active');
                $subNav.slideDown();
            } else {
                $(this).removeClass('is-active');
                $subNav.slideUp();
            }
        });
    });
})(jQuery);

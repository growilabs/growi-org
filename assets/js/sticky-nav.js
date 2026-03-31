/*! Main */
jQuery(document).ready(function($) {

    // Fixa navbar ao ultrapassa-lo
    var navbar = $('#sticky-nav'),
    		distance = navbar.offset().top,
        $window = $(window);

    var isFixedNav = true;

    $window.scroll(function() {
        if ($window.scrollTop() >= distance && isFixedNav) {
            navbar.css('opacity','0').removeClass('navbar-fixed-top').addClass('navbar-fixed-top').stop().animate({'opacity':'0.9'}, 1000);
            isFixedNav = !isFixedNav;
        }
        if ($window.scrollTop() < distance && !isFixedNav) {
            navbar.removeClass('navbar-fixed-top').stop().animate({'opacity':'1'}, 1000);
            isFixedNav = !isFixedNav;
        }
      });
});

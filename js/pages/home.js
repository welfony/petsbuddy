'use strict';

$(function() {
    var controller = window.REP.scrollMagicController;
    var timeline = new TimelineMax();
    var $defaultNavbar = $('.js-navbar.is-original-navbar');
    var $scrollBtn = $('.js-scroll-to-carousel-trigger');
    var $advancedCarousel = $('.js-advanced-carousel');
    $defaultNavbar.addClass('is-homepage');
    $scrollBtn.click(function() {
        var targetOffset = $advancedCarousel.offset().top;
        $('html, body').animate({
            scrollTop: targetOffset - $defaultNavbar.outerHeight() - 80
        },
        500);
    });
    $('.js-card-title').textTruncator({
        nbOfLines: 3
    });
});
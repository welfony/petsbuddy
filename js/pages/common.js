'use strict';

window.REP = window.REP || {};

$(function() {
    var $modalNewsLetter = $('#modal-newsletter');
    var $modalNewsLetterIframe = $modalNewsLetter.find('iframe');
    var modalNewsLetterIframe = $modalNewsLetter.find('iframe')[0];
    var $openNewsletterIframeBtn = $('.js-open-newsletters-iframe-btn');
    var $footerEmailInput = $('.js-footer-email-input');
    var site_changer_submit = $('#site_changer_submit');
    var language_changer = $('#language_changer');
    var $formThumbnailsWrapper = $('.js-form-thumbnails-wrapper');

    $('.js-slick-carousel').slick({
        slidesToShow: 5,
        prevArrow: '<i class="fa fa-angle-left slick-arrow-prev" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right slick-arrow-next" aria-hidden="true"></i>',
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    site_changer_submit.click(function() {
        var val = $('#site_changer_select').val();
        if (val.indexOf('http:') == -1) {
            val = "http://" + val;
        }
        window.location.href = val;
    });

    if (language_changer.length > 0) {
        language_changer.change(function() {
            val = $(this).val();
            if (val.indexOf('http:') == -1) {
                val = "http://" + val;
            }
            window.location.href = val;
        });
    }

    function updateNewsletterIframeUrl(callback) {
        var email = $('.js-footer-email-input').val();
        var urlWithoutEmail = $modalNewsLetterIframe.data('src');
        modalNewsLetterIframe.src = urlWithoutEmail + email;
        modalNewsLetterIframe.onload = function() {
            if (typeof callback === "function") {
                callback();
            }
        }
    }
    $openNewsletterIframeBtn.click(function() {
        updateNewsletterIframeUrl(function() {
            $modalNewsLetter.openModal();
        });
    });
    $footerEmailInput.keyup(function(e) {
        if (e.which === 13) {
            updateNewsletterIframeUrl(function() {
                $modalNewsLetter.openModal();
            });
        }
    });
    $formThumbnailsWrapper.find('input:checked').closest('li').addClass('is-selected');
    $formThumbnailsWrapper.find('input').change(function() {
        var $currentFormThumbnailsWrapper = $(this).closest('.js-form-thumbnails-wrapper');
        $currentFormThumbnailsWrapper.find('li').removeClass('is-selected');
        $(this).closest('li').addClass('is-selected');
    });
    $('body').removeClass('preload');
});
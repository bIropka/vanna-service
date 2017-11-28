$(window).ready(function() {

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    if($(window).scrollTop() > 250) {
        $('.header-content .link-phone').insertBefore('.header-top .to-calculator');
    } else {
        if($(window).width() > 1200) {
            $('.header-top .link-phone').insertBefore('.header-content .to-callback');
        }
    }

    if($(window).scrollTop() > 350) {
        $('.header-top').addClass('fixed');
    } else {
        $('.header-top').removeClass('fixed');
    }

    if($(window).width() < 1201) {
        $('.header-content .link-phone').insertBefore('.header-top .to-calculator');
    } else {
        if($(window).scrollTop() < 251) {
            $('.header-top .link-phone').insertBefore('.header-content .to-callback');
        }
    }

    $(window).scroll(function() {

        if($(window).scrollTop() > 250) {
            $('.header-content .link-phone').insertBefore('.header-top .to-calculator');
        } else {
            if($(window).width() > 1200) {
                $('.header-top .link-phone').insertBefore('.header-content .to-callback');
            }
        }

        if($(window).scrollTop() > 350) {
            $('.header-top').addClass('fixed');
        } else {
            $('.header-top').removeClass('fixed');
        }

    });

    $(window).resize(function() {

        if($(window).width() < 1201) {
            $('.header-content .link-phone').insertBefore('.header-top .to-calculator');
        } else {
            if($(window).scrollTop() < 251) {
                $('.header-top .link-phone').insertBefore('.header-content .to-callback');
            }
        }

    });

    $('.burger').click(function() {
        $(this).toggleClass('fa-bars fa-close');
        $('.header-top nav').toggleClass('active');
    });

    /* custom select */

    $('.custom-select .current-value').click(function() {
        if($(this).parents('.custom-select').hasClass('active')) {
            $('.custom-select').removeClass('active');
        } else {
            $('.custom-select').removeClass('active');
            $(this).parents('.custom-select').addClass('active');
        }

    });

    $('.custom-select ul li').click (function() {
        if(!$(this).hasClass('active')) {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parent().siblings('.current-value').find('span').text($(this).text());
            $(this).parent().siblings('input').val($(this).text());
            $(this).parents('.custom-select').removeClass('active');
        }
    });

    $(document).click(function(event) {

        if (!$(event.target).closest(".custom-select").length) {
            $('.custom-select').removeClass('active');
        }

    });

    /* ------------- */

    /* objects slider */

    var lists = $('.slider-objects').find('.object-image-list');

    lists.each(function(index, element) {
        $(element).find('.object-image').first().addClass('active');
        changeObjectImage($(element));
    });

    $('.object-image-list .object-image').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        changeObjectImage($(this).parent());
    });

    $('.slider-objects').slick({
        appendArrows: '.object-controls',
        prevArrow: '.objects-prev',
        nextArrow: '.objects-next'
    });

    function changeObjectImage(list) {
        var image = $(list).find('.active').html();
        var imageWrapper = $(list).siblings('.object-image-container');
        $(imageWrapper).html(image);
    }

    /* -------------- */

    /* rates */

    $('.rates-item-tab-control').click(function() {
        if(!$(this).hasClass('active')) {
            var current = $(this).index();
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents('.rates-item').find('.rates-single-rate.active').removeClass('active');
            $(this).parents('.rates-item').find('.rates-single-rate').eq(current).addClass('active');
        }
    });

    /* ----- */

    /* steps */

    $('.slider-steps').slick({
        slidesToShow: 3,
        appendArrows: '.steps-controls',
        prevArrow: '.steps-prev',
        nextArrow: '.steps-next',
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /* ----- */

    /* reviews */

    /* ------- */

});
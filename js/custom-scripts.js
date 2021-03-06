$(window).ready(function() {

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50}, 800);
        return false;
    });

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

    $('.to-callback').click(function() {
        $('.modal-callback').fadeIn().css('display', 'flex');
    });

    $('.modal').click(function (event) {

        var target = $(event.target);

        if (!target.closest($('.modal-inner')).length) {
            $('.modal').fadeOut();
        }

    });

    $('.close-modal').click(function() {
        $(this).parents('.modal').fadeOut();
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

    $('.slider-reviews').slick({
        appendArrows: '.reviews-controls',
        prevArrow: '.reviews-prev',
        nextArrow: '.reviews-next',
        dots: true
    });

    $('.reviews-item-data').mCustomScrollbar();

    $('.reviews-filter-item').click(function() {

        if(!$(this).hasClass('active')) {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        }

    });

    /* ------- */

    /* portfolio */

    $('#slider-large-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#slider-small-1'
    });
    $('#slider-small-1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#slider-large-1',
        focusOnSelect: true,
        appendArrows: '.portfolio-controls',
        prevArrow: '#portfolio-prev-1',
        nextArrow: '#portfolio-next-1',
        responsive: [
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $('#slider-large-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#slider-small-2'
    });
    $('#slider-small-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#slider-large-2',
        focusOnSelect: true,
        appendArrows: '.portfolio-controls',
        prevArrow: '#portfolio-prev-2',
        nextArrow: '#portfolio-next-2',
        responsive: [
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $('#slider-large-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#slider-small-3'
    });
    $('#slider-small-3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#slider-large-3',
        focusOnSelect: true,
        appendArrows: '.portfolio-controls',
        prevArrow: '#portfolio-prev-3',
        nextArrow: '#portfolio-next-3',
        responsive: [
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    /* --------- */

});
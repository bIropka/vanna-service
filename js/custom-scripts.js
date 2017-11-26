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

});
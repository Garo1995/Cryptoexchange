$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.menu-content').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-content').removeClass('transition-menu');
        }
    });
    $('.menu-mobile a').on('click', function () {
        $('.menu-content').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});



$('.choose-crypto-href a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-30;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});


let cryptoSwiper = new Swiper(".crypto-blog-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        '991': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        '575': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".crypto-pagination",
    }
});

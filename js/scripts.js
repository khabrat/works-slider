(function($){
    'use strict'
    $('.sliders').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slide:'.sliders__slide',
        prevArrow: '.sliders__prev',
        nextArrow: '.sliders__next'
      });
})(jQuery);
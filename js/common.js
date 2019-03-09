$(document).ready(function (){

  $('.header__slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
	  nextArrow: '.header__arrow-right',
    prevArrow: '.header__arrow-left'
  });

  $(".header__slide").on('afterChange', function(event, slick, currentSlide){
      $(".header__row-current-slidenumber").text("0" + (currentSlide + 1));
  });

  $('.projects__slider').each(function(i){
    $(this).slick({             // настройка слайдера
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        asNavFor: $(this).siblings()
    });

    $(this).siblings().slick({             
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0px',
        dots: false,
        arrows: false,
        asNavFor: this,
        focusOnSelect: true,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
     ]
    });
  });

});
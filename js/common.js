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

});
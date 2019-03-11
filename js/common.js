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
        arrows: true,
        asNavFor: this,
        focusOnSelect: true,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
     ]
    });
  });

  $('.client__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    nextArrow: '.client__arrow-right',
    prevArrow: '.client__arrow-left',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
     ]
  });

  $('.comment__slider').slick({    
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '0',
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          arrows: false,
          centerPadding: '0'
        }
      }
   ]
  });

  ymaps.ready(init);                                          //подключение карт

  var placemarks = [
      {
        latitude: 55.751812,
        longitude: 37.599292,
        hintContent: 'Цена: 126 млн. рублей'
      }
    ]

  function init (ymaps) {
      if ($('#map').get(0)) {
        var myMap = new ymaps.Map("map", {
              center: [55.751812,37.599292],
              zoom: 15,
              controls: ["zoomControl"],
              behaviors: ["drag"]
          });

          var placemark = new ymaps.Placemark([55.751812,37.599292],{
            hintContent: 'IDO'
          },{
            iconLayout: 'default#image'
          });

          myMap.geoObjects.add(placemark);
      }
    }

});
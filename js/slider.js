$(document).ready(function(){
    $('.slider').slick({ 
        // autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        dots: true,
        arrows: false,
        slidsToShow: 1,
        infinite: true,
        swape: true,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breapoint: 992,
                settingToShow: 1,
                dots: false,
            },
            {
              breapoint: 768,
                settingToShow: 1,
                dots: true,
                autoplaySpeed: 3000,
                speed: 800,
            }
        ]
  });
});

$('.slider__block').slick({
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '-100px',
    // autoplay: true,
    responsive: [
    {
      breakpoint: 1100,
      settings: {
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      }
    },
  ]
});


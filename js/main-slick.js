

$('.products-cart').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  speed: 300,
  easing: 'ease',
  autoplay: true,
  responsive: [
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 418,
          settings: {
            slidesToShow: 1
          }
        }
      ]
});

$('.products-cart-min').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  speed: 300,
  easing: 'ease',
  responsive: [
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 418,
          settings: {
            slidesToShow: 1
          }
        }
      ]
});

$('.sidb-products-cart').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  speed: 300,
  easing: 'ease',
});

$('.partners-carousel').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: true,
  speed: 500,
  easing: 'ease',
  arrows: false,
  autoplay: true,
  responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 418,
          settings: {
            slidesToShow: 2
          }
        }
      ]
});

$(function () {
  $('.review-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="prev prev-review"></button>',
    nextArrow: '<button class="next next-review"></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: '<button class="prev prev-review"></button>',
          nextArrow: '<button class="next next-review"></button>'
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: '<button class="prev prev-review"></button>',
          nextArrow: '<button class="next next-review"></button>'
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="prev prev-review"></button>',
          nextArrow: '<button class="next next-review"></button>'
        }
      }
    ]
  });

  $('.partners-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          prevArrow: '<button class="prev prev-partners"></button>',
          nextArrow: '<button class="next next-partners"></button>'
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: '<button class="prev prev-partners"></button>',
          nextArrow: '<button class="next next-partners"></button>'
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="prev prev-partners"></button>',
          nextArrow: '<button class="next next-partners"></button>'
        }
      }
    ]
  });

  $('.prices-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="prev prev-prices"></button>',
          nextArrow: '<button class="next next-prices"></button>'
        }
      }
    ]
  });

  const modalCallBack = $('.navbar-btn, .main-btn, .compare-counter-btn, .info-form-button').on('click', () => {
    $('.popup').css('display', 'block');
  });
  const modalClose = $('.popup-close').on('click', () => {
    $('.popup').css('display', 'none');
  });

  const responseOn = $('.response-menu-trigger');
  responseOn.on('click', () => {
    $('.response-menu').css('display', 'block');
    responseOn.css('display', 'none');
  });
  const responseOff = $('.response-menu-close');
  responseOff.on('click', () => {
    $('.response-menu').css('display','none');
    responseOn.css('display', 'block');
  })
});

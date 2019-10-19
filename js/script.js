$(function () {
  //review slider
  {
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
  }
  //partners slider
  {
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
  }
  //prices slider
  {
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
  }
  //modal callback
  {
    $('.navbar-btn, .main-btn, .compare-counter-btn, .info-form-button, .prices-slider-btn-1-1, .prices-slider-btn-1-2, .prices-slider-btn-1-3')
      .on('click', () => {
        $('#popup').css('display', 'block');
      });
    $('.popup-close').on('click', () => {
      $('#popup').css('display', 'none');
    });
  }
  //modal prices
  {
    $('.prices-slider-btn-2')
      .on('click', () => {
        $('.popup-prices').css('display', 'block');
      });
    $('.popup-close').on('click', () => {
      $('.popup-prices').css('display', 'none');
    });
  }


  $('#prices-country').val('Ukraine');
  //response menu buttons
  {
    const responseOn = $('.response-menu-trigger');
    responseOn.on('click', () => {
      $('.response-menu').css('display', 'block');
      responseOn.css('display', 'none');
    });
    const responseOff = $('.response-menu-close');
    responseOff.on('click', () => {
      $('.response-menu').css('display', 'none');
      responseOn.css('display', 'block');
    });
  }
  //menu scroll animation
  {
    $(".navbar-menu").on("click", "a", function (event) {
      event.preventDefault();
      let id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 2000, 'easeInOutCirc');
    });

    $(window).scroll(function () {
      if ($(window).width() > 768) {
        if ($(this).scrollTop() !== 0) {
          $('#toTop').fadeIn();
        } else {
          $('#toTop').fadeOut();
        }
      }
    });
    $('#toTop').click(function () {
      $('body,html').animate({scrollTop: 0}, 2000, 'easeInOutCirc');
    });
  }
  //review menu active
  {
    const reviewMenu = document.getElementById('review-menu');
    reviewMenu.addEventListener('click', event => {
      let target = event.target;
      if (target.tagName === 'A') {
        reviewMenu.querySelectorAll('li').forEach(elem => {
          if (elem === target.parentNode) {
            elem.classList.add('review-menu-link-current');
          } else {
            elem.classList.remove('review-menu-link-current');
          }
        })
      }
    })
  }
  //prices menu active
  {
    const pricesMenu = document.getElementById('prices-menu');
    pricesMenu.addEventListener('click', event => {
      let target = event.target;
      if (target.tagName === 'A') {
        pricesMenu.querySelectorAll('li').forEach(elem => {
          if (elem === target.parentNode) {
            elem.classList.add('review-menu-link-current');
          } else {
            elem.classList.remove('review-menu-link-current');
          }
        })
      }
    })
  }
});

$(document).ready(function () {
    $(".playing").owlCarousel({
      margin: 10,
      dots: true,
      loop: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
      autoplay: true,
      autoplaySpeed: 1000,
      autoplayTimeout: 3000,
    });
    $(".photos").owlCarousel({
      margin: 10,
      dots: true,
      loop: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      }
    });
    $(".company-carousel").owlCarousel({
      margin: 10,
      dots: true,
      loop: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
      autoplay: true,
      autoplaySpeed: 1000,
      autoplayTimeout: 3000,
    });
    $(".people").owlCarousel({
      margin: 10,
      dots: true,
      loop: true,
      responsive: {
        0: {
          items: 1,
        }
      }
      
    });
  });
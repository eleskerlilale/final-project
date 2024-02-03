$(document).ready(function () {
    $(".company-carousel").owlCarousel({
        margin: 10,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 5,
            }
        },
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 3000,
    });
    $(".feedbacks").owlCarousel({
        margin: 10,
        dots: true,
        loop: true,
        responsive: {
          0: {
            items: 1,
          }
        },
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 3000,
      });
});

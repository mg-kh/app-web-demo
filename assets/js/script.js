(function ($) {
     $(document).ready(function () {
          $('.owl-carousel-screenshoot').owlCarousel({
               loop: true,
               margin: 10,
               nav: false,
               items: 1,
               responsive: {
                    0: {
                         items: 1
                    },
                    600: {
                         items: 3
                    },
                    1000: {
                         items: 4
                    }
               }
          });
          $('.owl-carousel-testi').owlCarousel({
               loop: true,
               margin: 10,
               nav: false,
               items: 1,
          })
     });
})(jQuery);
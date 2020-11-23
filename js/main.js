(function($) {
    "use strict";


    //Preloader
    // $(window).load(function() {
    //     $("#loading").fadeOut(500);
    // })

    // sticky header
    // $(window).on('scroll', function() {
    //     var scroll = $(window).scrollTop();
    //     if (scroll < 100) {
    //         $("#header_sticky").removeClass("sticky_header");
    //     } else {
    //         $("#header_sticky").addClass("sticky_header");
    //     }
    // });

    //Mean menu 

    $('#mobile_menu_nav').meanmenu({
        meanMenuContainer: '.mobile_menu',
        meanScreenWidth: "768"
    });

    // One Page Nav
    // var top_offset = $('.header_area').height() - 10;
    // $('.main_menu nav ul').onePageNav({
    //     currentClass: 'active',
    //     scrollOffset: top_offset,
    // });




    // mainSlider slick
    // function mainSlider() {
    //     var BasicSlider = $('.slider_active');
    //     BasicSlider.on('init', function(e, slick) {
    //         var $firstAnimatingElements = $('.single_slider:first-child').find('[data-animation]');
    //         doAnimations($firstAnimatingElements);
    //     });
    //     BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    //         var $animatingElements = $('.single_slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    //         doAnimations($animatingElements);
    //     });
    //     BasicSlider.slick({
    //         autoplay: false,
    //         autoplaySpeed: 10000,
    //         dots: false,
    //         fade: true,
    //         arrows: false,
    //         responsive: [
    //             { breakpoint: 767, settings: { dots: false, arrows: false } }
    //         ]
    //     });

    //     function doAnimations(elements) {
    //         var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    //         elements.each(function() {
    //             var $this = $(this);
    //             var $animationDelay = $this.data('delay');
    //             var $animationType = 'animated ' + $this.data('animation');
    //             $this.css({
    //                 'animation-delay': $animationDelay,
    //                 '-webkit-animation-delay': $animationDelay
    //             });
    //             $this.addClass($animationType).one(animationEndEvents, function() {
    //                 $this.removeClass($animationType);
    //             });
    //         });
    //     }
    // }
    // mainSlider();


    // main slider owl-carousel
    $('.slider_carousel_active').owlCarousel({
        items: 1,
        nav: true,
        navText: ['<span class="back">Back</span>', '<span class="next">Next</span>'],
        responsiveClass: true,
        responsive: {
            0: {
                nav: false
            },
            768: {
                nav: false
            },
            992: {
                nav: true
            },
            1200: {
                nav: true
            }
        }
    })




    // product carousel
    $('.product_wrapper').owlCarousel({
        margin: 30,
        nav: true,
        navText: ['<span class="back">Back</span>', '<span class="next">Next</span>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    })


    //brand carousel

    $('.brand_wrapper').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 500,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 6,
            }
        }
    })




    // data-background
    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });


    // Counter up
    // $('.fact').counterUp({
    //     delay: 10,
    //     time: 1000
    // });

    // Magnific popup

    // $('.video_btn').magnificPopup({
    //     items: {
    //         src: 'https://www.youtube.com/watch?v=1IHeMeSmZbo'
    //     },
    //     type: 'iframe'
    // });

    // YT background player
    // $(".testimonial_area").YTPlayer({
    //     showControls: false
    // });

    // Slick slider 
    // $('.testimonial_active').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.author_img_active',
    // });
    // $('.author_img_active').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.testimonial_active',
    //     dots: false,
    //     centerMode: true,
    //     focusOnSelect: true,
    //     arrows: false,
    //     centerPadding: '0px',
    // });




    // branding slide


    // $('.brandign_active').slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     responsive: [{
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });



    // Countdown

    // $('[data-countdown]').each(function() {
    //     var $this = $(this),
    //         finalDate = $(this).data('countdown');
    //     $this.countdown(finalDate, function(event) {
    //         $this.html(event.strftime('<div class="count_down">%D<span>Days</span></div><div class="count_down">%H<span>Hours</span></div><div class="count_down">%M<span>Minutes</span></div><div class="count_down">%S<span>Seconds</span></div>'));
    //     });
    // });



})(jQuery);
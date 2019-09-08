require('slick-carousel');

(function ($) {
    'use strict';
    $(document).ready(function () {
        createSlick();
    });

    $(window).on('resizeend', function () {
        createSlick();
    });

    function createSlick() {
        /* ########################################################################################### */
        /* -------------------------------------- K Slider  --------------------------------------- */
        /* ########################################################################################### */
        let slider = $('.k-slider');
        let slide = $('.k-slider .k-item');

        if (slide.length > 1) {
            slider.not('.slick-initialized').slick(
                {
                    infinite: false,
                    arrows: true,
                    speed: 300,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    preletrow : slider.find('.k-prev'),
                    nextArrow : slider.find('.k-next'),
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 4,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                    ]
                }
            );
        }
    }

})(jQuery);
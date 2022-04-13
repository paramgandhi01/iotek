// const $=require("jquery");
window.onload=function(){

    $('.testimonial-active').slick({
        dots: true,
        speed: 800,
        arrows: false,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
        }
    },
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
        }
    },
]
});

}




   
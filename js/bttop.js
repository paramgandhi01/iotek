const $=require("jquery");
// $(function () {
//     if ($(this).scrollTop() > 600) {
//         $('.back-to-top').fadeIn(200)
//     }
//      else {
//         $('.back-to-top').fadeOut(200)
//     }
//     });

    // $('.back-to-top').on('click', function (event) {
    //     event.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: 0,
    //     }, 1500);
    // });

    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn()
            }
            else {
                $('.back-to-top').fadeOut()
            }
        });

        $(".back-to-top").click(function(){
            $("html,body").animate({scrollTop:0},1500);
        });
    });

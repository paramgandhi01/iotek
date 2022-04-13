const $ = require( "jquery" );
// $(window).on('scroll', function (event) {
//     $(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll < 20) {
//         $(".navbar-area").removeClass("sticky");   
//     }
//      else {
//         $(".navbar-area").addClass("sticky");
//     }
//     })

    $(function(){
        var navbar=$(".navbar-area");
       var nan= $(".navbar .navbar-brand img")
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if(scroll<20){
                navbar.removeClass("sticky");
                nan.attr("src", "./images/logo.svg");
            }
            else{
                navbar.addClass("sticky");
             nan.attr("src", "./images/logo-2.svg");
            }
        });
    })
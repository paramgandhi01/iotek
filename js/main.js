// $(window).on('scroll', function (event) {
//     $(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll < 20) {
//         $(".navbar-area").removeClass("sticky");
//         $(".navbar .navbar-brand img").attr("src", "images/logo.svg");
//     } else {
//         $(".navbar-area").addClass("sticky");
//         $(".navbar .navbar-brand img").attr("src", "images/logo-2.svg");
//     }
//     });

//       //===== Section Menu Active
//       $(function () {
//         var scrollLink = $('.page-scroll');
//         var scrollbarLocation = $(this).scrollTop();
//         scrollLink.each(function () {
//             var sectionOffset = $(this.hash).offset().top - 73;
//             if (sectionOffset <= scrollbarLocation) {
//                 $(this).parent().addClass('active');
//                 $(this).parent().siblings().removeClass('active');
//             }
//         });
//     });

//menu active try one//
// const currentLocation=location.href;
// const menuItem=document.querySelectorAll("a");
// const menuLength=menuItem.length;
// for(let i=0;i<menuLength;i++)
// {
//     if(menuItem[i].href===currentLocation)
//     {
//         menuItem[i].className==="active"
//     }
// }

//menu active try two//
// console.log("hello");
// let links=document.querySelector(".navbar-nav").querySelectorAll("li");
// console.log(links);
// links.forEach(li => {
//     li.addEventListener("click",()=>{
//         resetLinks();
//         this.classList.add("active");
//     })  
// });
// function resetLinks(){
//     links.forEach(li=>{
//         li.classList.remove("active");
//     })
// }

// $(document).on("click","ul li",function(){
//     $(this).addClass("active").siblings().removeClass("active");
// })
// $(document).ready(function () {
//     $(document).on("click","ul li",function(){
//         $(this).addClass("active").siblings().removeClass("active");
//     })
//   });

// (function($){
//     $(document).on("click","ul li",function(){
//         $(this).addClass("active").siblings().removeClass("active");
//     })
//      })(jQuery);

    //  jQuery(document).ready(function($){
    //     $(document).on("click","ul li",function(){
    //         $(this).addClass("active").siblings().removeClass("active");
    //     })
    //  });

//     const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
const $ = require( "jquery" );

     $(document).on("click","ul li",function(){
         $(this).addClass("active").siblings().removeClass("active");
     })
    //  var setDefaultActive = function() {
    //     var path = window.location.pathname;
    
    //     var element = $(".navbar-area li[href='" + path + "']");
    
    //     element.addClass("active");
    // }

    // $(document).ready(function(){
    //     $('li[data-toggle="tab"]').on('show.bs.tab', function(e) {
    //         localStorage.setItem('activeTab', $(e.target).attr('href'));
    //     });
    //     var activeTab = localStorage.getItem('activeTab');
    //     if(activeTab){
    //         $('#myTab li[href="' + activeTab + '"]').tab('show');
    //     }
    // });

    $(function () {
        setNavigation();
    });
    function setNavigation() {
        var path = window.location.pathname;
        // console.log(path)
        path = path.replace(/\/$/, "");
        // console.log(path)
        path = decodeURIComponent(path);
        console.log(path);
    
        $(".navbar-nav a").each(function () {
            var href = $(this).attr('href');
            console.log(href)
            if (path.substring(0, href.length) === href) 
            {
                console.log("first")
                $(".navbar-nav li").removeClass("active");
                $(this).closest('li').addClass('active');
            }
            // else
            // {
            //     console.log("hii")
            //     // $(".navbar-nav li").attr("home").addClass("active");
            //     $('.navbar-nav li.nav-item').eq(0).addClass("active");
            // }
        });
    }
    
   
        
       
    
       
     
           
           
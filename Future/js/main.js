$(function () {
    $(window).scroll(function() {
        $('#learn .section-title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.skill-free').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInRight");
            }
        });
    });

    $(window).scroll(function() {
        $('.skill-change').each(function(){
            var imagePos = $(this).offset().top;


            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("zoomInRight");
            }
        });
    });

    $(window).scroll(function() {
        $('.skill').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("zoomInLeft");
            }
        });
    });
})

// $(function () {
//     $(window).scroll(function() {
//         $('#learn .section-title').each(function(){
//             var imagePos = $(this).offset().top;

//             var topOfWindow = $(window).scrollTop();
//             if (imagePos < topOfWindow+650) {
//                 $(this).addClass("fadeInRight");
//             }
//         });
//     });
// })
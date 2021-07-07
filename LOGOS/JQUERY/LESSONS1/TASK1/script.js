$( document ).ready(function(){

    $('.bg-black-screen').slideDown().animate({
        height: '235px'
    }, 60000, function(){
        $('h1').html('1 minute')
        $('.bg-black-screen').slideDown().animate({
            height: '0px'   
        }, 60000, function(){
            $('h1').html('0 minute')
        })
    })

});

// Необхідно реалізувати наступний функціонал як на відео ClickBox, а саме:
// — потрібно щоб кожен раз при кліку на елемент йому рандомно задавалася ширина, висота та колір фону, а також позицію елемента
// — використовуйте jQuery easing для плавності анімації

$(function(){

    $('.ball').click(function(){
        let r, g, b, docHeight, docWidth, ballWidth, ballHeihgt;
        let widthBall, heightBall;

        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);

        docHeight = $(document).height(),
        docWidth = $(document).width(),

        ballWidth = $('.ball').width(),
        ballHeihgt = $('.ball').height(),

        heightMax = docHeight - ballHeihgt,
        widthMax = docWidth - ballWidth,

        widthBall = Math.floor(Math.random() * widthMax),
        heightBall = Math.floor(Math.random() * heightMax),


        $('.ball').animate({
            width: `${widthBall}`,
            height: `${heightBall}`,
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            left: Math.floor(Math.random() * widthMax),
            top: Math.floor(Math.random() * heightMax)
        }, 3000, 'easeOutBounce')

    })


})


// Необхідно реалізувати наступний функціонал як на відео DiscoBall, а саме:
// — потрібно при загрузці сторінки елементу йому рандомно задавалася ширина, висота, колір фону, колір бордера та тінь, 
//а також позицію елемента
// — використовуйте jQuery easing для плавності анімації
// — використовуйте SetInterval для того щоб анімацію зробити безкінеченою

$(function(){
    let r, g, b, borderR, borderG, borderB;
    setInterval((function(){
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);

        borderR = Math.round(Math.random() * 255);
        borderG = Math.round(Math.random() * 255);
        borderB = Math.round(Math.random() * 255);
        
        $('.ball').animate({
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            borderColor: `rgb(${borderR}, ${borderG}, ${borderB})`,
            boxShadow: `5px 5px 50px rgb(${r}, ${g}, ${b})`,
            left: Math.floor(Math.random() * window.innerWidth/1.5),
            top: Math.floor(Math.random() * window.innerHeight/1.5)
        }, 2000)
    }))

})
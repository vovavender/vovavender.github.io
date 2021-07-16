const getS = selector => document.querySelector(selector);
setInterval(() => {
    let topD = new Date().toLocaleDateString();
    document.querySelector('.small-top').textContent = topD;
    let topT = new Date().toLocaleTimeString();
    document.querySelector('.top-bottom').textContent = topT;
    if (topT < 10) topT = '0' + topT;
})

makeTime = number => {
    if(parseInt(number)<10) number = '0' + number;
    return number
}

/*ORIGINAl*/
// let intervalID;
// let mili = 0;
// let sec = 0;
// let min = 0;
// let hour = 0;

// let startBtn = document.querySelector('.start');
// startBtn.addEventListener('click', function () {
//     intervalID = setInterval(() => {
//         mili = parseInt(mili)
//         sec = parseInt(sec)
//         min = parseInt(min)
//         hour = parseInt(hour)
//         if (mili < 99) mili++
//         else {
//             mili = 0;
//             if (sec < 59) sec++
//             else {
//                 sec = 0;
//                 if (min < 59) min++;
//                 else {
//                     min = 0;
//                     hour++
//                 }
//             }
//         }
//         hour = makeTime(hour)
//         min = makeTime(min)
//         sec = makeTime(sec)
//         if (mili > 9 && mili < 100) mili = '0' + mili
//         else if (mili < 10) mili = '00' + mili
//         document.querySelector('.timer').textContent = `${hour}:${min}:${sec}:${mili}`
//     }, 10)
// })
/*ORIGINAl*/

let intervalID;
let mili = 0;
let sec = 0;
let min = 0;
let hour = 0;

let startBtn = document.querySelector('.start');
startBtn.addEventListener('click', function () {
    intervalID = setInterval(() => {
        mili = parseInt(mili)
        sec = parseInt(sec)
        min = parseInt(min)
        hour = parseInt(hour)
        if (mili < 99) mili++
        else {
            mili = 0;
            if (sec < 59) sec++
            else {
                sec = 0;
                if (min < 59) min++;
                else {
                    min = 0;
                    hour++
                }
            }
        }
        hour = makeTime(hour)
        min = makeTime(min)
        sec = makeTime(sec)
        if (mili < 10) mili = '0' + mili
        // else if (mili < 10) mili = '00' + mili
        document.querySelector('.timer').textContent = `${hour}:${min}:${sec}:${mili}`
    }, 10)
    getS('.start').disabled = true;
    getS('.stop').disabled = false;
    getS('.loop').disabled = false;
})

let stopBtn = document.querySelector('.stop');
stopBtn.addEventListener('click', () => {
    clearInterval(intervalID);
    getS('.start').disabled = false;
    getS('.stop').disabled = true;
    getS('.loop').disabled = false;
    getS('.reset').disabled = false;
})

let counter = 0
document.querySelector('.loop').addEventListener('click', ()=>{
    if(counter < 7){
        let h4 = document.createElement('h4')
        // h4.textContent = document.querySelector('.center-right').textContent;
        // querySelector('.center div:last-child').appendChild(p);
        h4.textContent = document.querySelector('.lefttext').textContent;
        document.querySelector('.center-right:last-child').appendChild(h4)
        counter++;
    }
})

document.querySelector('.reset').addEventListener('click', ()=>{
    counter=0;
    mili=00;
    sec=00;
    min=00;
    hour=00;
    if(mili>9 && mili<100) mili='0'+mili
    else if(mili<10) mili='00'+mili
    document.querySelector('.center-right:last-child').innerHTML = ''
    document.querySelector('.timer').textContent = `${hour}:${min}:${sec}:${mili}`
})

//BUTTON BOTTOM
let left_number = getS('.timer').innerHTML;
let right_number = 0;
let check = true;
let timer_down;



getS('.time-start').addEventListener('click', function(){
    if(check){
        if(+getS('.timer2').innerHTML<10){
            getS('.left_number').innerHTML = '0' + (getS('.timer2').innerHTML);
        }
        else(
            getS('.left_number').innerHTML = +getS('.timer2').innerHTML
        )
    }
    //FUnciy syda
    timeOut();
});

getS('.time-stop').addEventListener('click', function(){
    clearTimeout(timer_down);
    check = false;
})

getS('.time-reset').addEventListener('click', function(){
    left_number = 0;
    right_number = 0;
    getS('.left_number').innerHTML = '00';
    getS('.right_number').innerHTML = '00';
    check = true;
});

//Sumbol
getS('.plus').addEventListener('click', function(){
    let k = +getS('.timer2').innerHTML+1;
    if(+getS('.timer2').innerHTML < 9 && +getS('.timer2').innerHTML >= 0){
        getS('.timer2').innerHTML = +k;
    }
    else{
        getS('.timer2').innerHTML = k;
    }
})

getS('.minus').addEventListener('click', function(){
    let k = +getS('.timer2').innerHTML-1
    if(+getS('.timer2').innerHTML <= 10 && +getS('.timer2').innerHTML >= 0){
        getS('.timer2').innerHTML = +k;
    }
    else{
        getS('.timer2').innerHTML = k;
    }
})

//Зворотній відлік

function timeOut(){
    // debugger
    left_number = +getS('.left_number').innerHTML;
    right_number = +getS('.right_number').innerHTML;
    timer_down = setTimeout(function (){
        right_number--;
        if(right_number == 0 && left_number == 0){
            getS('.right_number').innerHTML = '00';
            check = true;
            return
        }
        if(right_number < 0) {
            right_number = 59
            if(left_number > 0) {
                left_number--;
            }
        }

        if(left_number < 10){
            left_number = "0" + left_number;
        }

        if(right_number < 10){
            right_number = '0' + right_number;
        }

        getS('.left_number').innerHTML = left_number;
        getS('.right_number').innerHTML = right_number;
        timeOut()
    }, 1000);
}


// let startBtn = document.querySelector('.start');
// startBtn.addEventListener('click', function () {
//     let intervalID;
//     function startElem() {
//         let startText = document.querySelector('.lefttext');
//         // startText.innerHTML = 'good';
//         let miliSecond = document.querySelector('.miliseconds');
//     }
//     startElem()
// })

    // if(mili < 999){
    //     console.log('mezha');
    //     mili++;
    //     document.querySelector('.miliseconds').textContent = mili;
    // }
    // else{
    //     mili = 0;
    //     if(sec < 59){
    //         sec++;
    //         document.querySelector('.second').textContent = sec;
    //     }
    // }

// let startBtn = document.querySelector('.start');
// startBtn.addEventListener('click', function () {
//      mili = 0;
//      sec = 0;


// function init(){
//     mili++;
//     intervalID = setInterval(init, 1000);
//     // console.log(miliseconds);
//     document.querySelector('.miliseconds').textContent = mili;
// }
// init()
// })

// let stopBtn = document.querySelector('.stop');
// stopBtn.addEventListener('click', () => {
//     clearInterval(intervalID);
// let miliseconds = 0;
// let seconds = 0;
// function init(){
//     miliseconds++;
//     setInterval(init, 1000);
//     // console.log(miliseconds);
//     document.querySelector('.miliseconds').textContent = miliseconds;
// }
// init()
// })

// function tick(){
//     miliseconds++;
//     if(miliseconds >= 60){
//         seconds++;
//         miliseconds = miliseconds - 60;
//         document.querySelector('.second').textContent = second;
//     }
// }

// tick()

//Секундомер
//изначальные переменные
// min = 0;
// hour = 0;
// //Оставляем вашу функцию
// function init() {
//     sec = 0;
//     setInterval(tick, 1000);
//     document.querySelector('.milisecond').textContent = sec;
// }
// init()
// //Основная функция tick()
// function tick() {
//     sec++;
//     if (sec >= 60) { //задаем числовые параметры, меняющиеся по ходу работы программы
//         min++;
//         sec = sec - 60;
//         document.querySelector('.second').textContent = sec;
//     }
//     if (min >= 60) {
//         hour++;
//         min = min - 60;
//         document.querySelector('.munites').textContent = sec;
//     }
    // if (sec < 10) { //Визуальное оформление
    //     if (min < 10) {
    //         if (hour < 10) {
    //             document.getElementById('timer').innerHTML ='0' + hour + ':0' + min + ':0' + sec;
    //         } else {
    //             document.getElementById('timer').innerHTML = hour + ':0' + min + ':0' + sec;
    //         }
    //     } else {
    //         if (hour < 10) {
    //             document.getElementById('timer').innerHTML = '0' + hour + ':' + min + ':0' + sec;
    //         } else {
    //             document.getElementById('timer').innerHTML = hour + ':' + min + ':0' + sec;
    //         }
    //     }
    // } else {
    //     if (min < 10) {
    //         if (hour < 10) {
    //             document.getElementById('timer').innerHTML = '0' + hour + ':0' + min + ':' + sec;
    //         } else {
    //             document.getElementById('timer').innerHTML = hour + ':0' + min + ':' + sec;
    //         }
    //     } else {
    //         if (hour < 10) {
    //             document.getElementById('timer').innerHTML = '0' + hour + ':' + min + ':' + sec;
    //         } else {
    //             document.getElementById('timer').innerHTML = hour + ':' + min + ':' + sec;
    //         }
    //     }
    // }
// }
// tick()
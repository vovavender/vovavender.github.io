// Завдання 1:
// Необхідно реалізувати наступний функціонал як на відео Puzzle, а саме:
// — Необхідно розбити картинку на 16 рівних частин і помістити їх в блоки. Розбивати картинку на кусочки можна за допомогою background-position
// — При кліку на кнопку Start game або при перетягуванні пазла на правий блок(використовуємо drag & drop) має запуститися зворотній відлік.
// Сама кнопка має заблокуватися.
// — Якщо час закінчився і ви не встигли скласти пазл має видати повідомлення в модальному вікні: “It's a pity, but you lost”. 
//Кнопка Check result має заблокуватися
// — При кліку на кнопку Check result має видати повідомлення в модальному вікні: “You still have time, you sure?” з часом який залишився.
// — При кліку на кнопку Check перевіряється чи добре складений пазл, якщо так видає повідомлення: “Woohoo, well done, you did it!” в іншому
// варіанті “It's a pity, but you lost”. Кнопка Check result має заблокуватися.
// — При кліку на кнопку Close закриває модальне вікно.
// — При кліку на кнопку New game скидує час і заново рандомно розставляє пазли. Кнопка Start game має розблокуватися, а кнопка Check result 
//має бути заблокована.

$(function () {

    let count = 0;
    let timerStarted = 0;

    let parent = $(".left");
    let divs = parent.children();

    for (let i = 0; i < divs.length; i++) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0])
    }

    let arrayPosition = [$('.img-block-1'), $('.img-block-2'), $('.img-block-3'), $('.img-block-4'), $('.img-block-5'), $('.img-block-6'),
    $('.img-block-7'),
    $('.img-block-8'), $('.img-block-9'), $('.img-block-10'), $('.img-block-11'), $('.img-block-12'), $('.img-block-13'), $('.img-block-14'),
    $('.img-block-15'), $('.img-block-16')];

    console.log('MASUV LENGTH', arrayPosition.length);

    
    let checkFunction = true;

    //ФУНКЦІЯ перевірки позиції елементів
    function checkPosition() {
        for (let i = 0; i < $('.go-block').length; i++) {

            let lengthGo = document.querySelectorAll(".img-styles .go-block")
            console.log('Length', lengthGo.length);


            let checkElem = $('.go-block')[i].dataset.number == i;
            console.log('DATASET NUMBER ZMINNA', checkElem)

            if (lengthGo.length == 16) {
                console.log('PROVRKA ROZPOCHATO');

                if ($('.go-block')[i].dataset.number == i) {
                    $(".modal-container").css({ display: 'block' });
                    $(".time-end").css({ display: 'block' });
                    $(".next").css({ display: 'none' });

                    // $('.modal-text').css({ display: 'none' })
                    // $('.modal-timer-text').css({ display: 'block' })

                    // if(seconds < 10){
                    //     $('.modal-timer-text').text(`You still have time, you sure? 00 : 0${seconds}`);
                    // }

                    // $('.modal-timer-text').text(`You still have time, you sure? 00:${seconds}`);

                    $('.modal-text').text('“YOU WINNER”');
                    checkFunction = true;
                    if (count == 0) {
                        clearInterval(int);
                    }


                    console.log('            ');
                    console.log('DATASET NUMBER', $('.go-block')[i])
                    console.log('DATASET NUMBER', $('.go-block')[i].dataset.number)
                    console.log('NUMBER', i);
                    console.log('REZULT', $('.go-block')[i].dataset.number == i)

                    $(".modal-container").css({
                        backgroundColor: "rgba(0, 0, 0, 0.78)",
                        zIndex: 3
                    });

                    // $('.check').attr('disabled', true);
                    // // $('.check').css('background-color', '#e34040');
                    // $('.check').css('background-color', '#d35a5a')

                    // closeModal();

                    if($('.modal-text').text() == '“YOU WINNER”' || $('.modal-text').text() == '“YOU NOT WINNER”'){
                        $('.start').prop('disabled', false);
                        $('.start').css('backgroundColor', '#cf2f2f');
            
                        $('.check').prop('disabled', false);
                        $('.check').css('backgroundColor', '#cf2f2f');
                    }

                }
                else {
                    $(".modal-container").css({ display: 'block' });
                    $(".time-end").css({ display: 'block' });
                    $(".next").css({ display: 'none' });

                    // $('.modal-text').css({ display: 'none' })
                    // $('.modal-timer-text').css({ display: 'block' })

                    // if(seconds < 10){
                    //     $('.modal-timer-text').text(`You still have time, you sure?  00 : 0${seconds}`);
                    // }

                    // $('.modal-timer-text').text(`You still have time, you sure? 00:${seconds}`);
                    $('.modal-text').text('“YOU NOT WINNER”');
                    // $('.modal-text').text('“YOU WINNER”');

                    // $('.check').attr('disabled', true);
                    // // $('.check').css('background-color', '#e34040');
                    // $('.check').css('background-color', '#d35a5a')

                    checkFunction = false;
                    if (count == 1) {
                        clearInterval(int);
                    }

                    if($('.modal-text').text() == '“YOU WINNER”' || $('.modal-text').text() == '“YOU NOT WINNER”'){
                        $('.start').prop('disabled', false);
                        $('.start').css('backgroundColor', '#cf2f2f');
            
                        $('.check').prop('disabled', false);
                        $('.check').css('backgroundColor', '#cf2f2f');
                    }

                    console.log('            ');
                    console.log('ELEMENT', $('.go-block')[i])
                    console.log('DATASET NUMBER LOSER', $('.go-block')[i].dataset.number)
                    console.log('NUMBER LOSER', i);
                    console.log('REZULT  LOSER', $('.go-block')[i].dataset.number == i)

                    $(".modal-container").css({
                        backgroundColor: "rgba(0, 0, 0, 0.78)",
                        zIndex: 3
                    });

                    // closeModal();

                    break;
                }

            } else {
                $(".modal-container").css({ display: 'block' });
                $(".time-end").css({ display: 'block' });
                $(".next").css({ display: 'none' });
                $('.modal-text').text('“Its a pity, but you lost!!!”');
                checkFunction = false

                $(".modal-container").css({
                    backgroundColor: "rgba(0, 0, 0, 0.78)",
                    zIndex: 3
                });

                // closeModal();
            }

        }

    }

    // let checkFunction = true; було тут

    //    //ФУНКЦІЯ СТАРТ ТАЙМЕРА
    function startTimer() {

        // if(checkFunction){
        console.log(checkFunction);

        seconds = 20;
        int = setInterval(function () { // запускаємм інтервал
            seconds--; // віднімаємо кожну секунду

            if (seconds > 0) {
                $('.time-text').text(`00 : ${seconds}`); // виводимо отримане значення в H1
                console.log(`${count} AND, ${timerStarted}`)

                $('.modal-text').css({ display: 'none' })
                $('.modal-timer-text').css({ display: 'block' })
                $('.modal-timer-text').text(`You still have time, you sure? 00:${seconds}`);


                if (seconds < 10) {
                    $('.time-text').text(`00 : 0${seconds}`);
                    // $('.modal-text').text(`You still have time, you sure? 00:0${seconds}`);

                    $('.modal-text').css({ display: 'none' })
                    $('.modal-timer-text').css({ display: 'block' })
                    $('.modal-timer-text').text(`You still have time, you sure? 00:0${seconds}`);

                }

            } else {
                clearInterval(int); // зачищаємо інтервал, щоб він не продовжував працювати при досягненні 0
                console.log($('.time-text').text(`00 : 0${seconds}`))
                console.log(seconds);

                $('.modal-text').css({ display: 'block' })
                $('.modal-timer-text').css({ display: 'none' })

                $(".modal-container").css({ display: 'block' });
                $(".time-end").css({ display: 'block' });
                $(".next").css({ display: 'none' });
                $('.modal-text').text('“Its a pity, but you lost”');

                $(".modal-container").css({
                    backgroundColor: "rgba(0, 0, 0, 0.78)",
                    zIndex: 3
                });

                console.log(`${count} AND, ${timerStarted}`)

                closeModal()

                timerStarted = 0;
                count = 0;

                if (count == 1) {
                    timerStarted = 0;
                    count = 0;
                }

            }

            if (count == 1) {
                clearInterval(intervalID);
            }

        }, 1000);
        // }
        //Запуск секундоміра

        console.log('CHECK PISLa', checkFunction)

        checkFunction = false;

    }

    let draggableElement, dropOn;

    $('.go-block').draggable({
        revert: true,
        start: function () {
            count = 0;
            $('.check').attr('disabled', false);
            // $('.check').css('background-color', '#e34040');
            $('.check').css('background-color', '#cf2f2f')
            // якщо гра не була стартована тоді стартуємо
            if (timerStarted == 0) {
                startTimer()
                timerStarted = 1;
                $('.start').attr('disabled', true);
                $('.start').css('background-color', '#d35a5a')
                // $('.start').css('background-color', 'rgba(227, 64, 64, 0.548)')/////// СТАРТ НЕАКТИВНИЙ
            }
            bg = $(this).css('background');
            textContent = $(this).text();

        }
    });

    $('.img-styles').droppable({
        drop: function (event, ui) {

            draggableElement = ui.draggable;//Елемент який перетянули
            dropOn = $(this); //Елемент в який перетянули елемент draggableElement

            // $(draggableElement).css({
            //     top: '0px',
            //     left: '0px',
            //     position: 'relative'
            // }).appendTo(dropOn);

            console.log('ITS draggableElement', draggableElement);
            console.log('ITS dropOn', dropOn);

            console.log('EVENT', event)
            console.log('EVENT TARGET', event.target)
            console.log('CHILDREN', event.target.children)
            console.log('LENGTH', event.target.children.length)
            // console.log($(this).childElementCount)

            if (event.target.children.length == 0) {
                $(draggableElement).css({
                    top: '0px',
                    left: '0px',
                    position: 'relative'
                }).appendTo(dropOn);
            }

        }
    });


    function closeModal() {
        //Закрити модальне вікно коли гравець лузер
        $('.close').click(function () {
            $(".modal-container").css({ display: 'none' });
            $('.time-text').text('01: 00');
            clearInterval(int);

            $('.start').prop('disabled', false);
            $('.start').css('backgroundColor', '#cf2f2f');

            $('.check').prop('disabled', true);
            $('.check').css('backgroundColor', '#d35a5a');

            if($('.modal-text').text() == '“YOU WINNER”' || $('.modal-text').text() == '“YOU NOT WINNER”'){
                $('.start').prop('disabled', false);
                $('.start').css('backgroundColor', '#d35a5a');
    
                $('.check').prop('disabled', false);
                $('.check').css('backgroundColor', '#d35a5a');
            }


        })
    }


    let seconds, int;


    //КНОПКА СТАРТ
    $('.start').click(function () {


        if (timerStarted == 0) {
            startTimer();
            timerStarted = 1;

            console.log('BTN START CLICK');
            $('.check').prop('disabled', false);
            $('.check').css('backgroundColor', '#cf2f2f');

            $('.start').prop('disabled', true);
            $('.start').css('backgroundColor', '#d35a5a');

        }

    })


    //КНОПКА Перевірки
    $('.check').click(function () {

        $(".modal-container").css({ display: 'block' });
        $(".time-end").css({ display: 'block' });
        $(".next").css({ display: 'block' });
        // $('.modal-text').text(`You still have time, you sure? 00:${seconds}`);
        // $('.modal-text').text(`You still have time, you sure? 00:${seconds}`);

        // $('.modal-text').css({ display: 'none' })
        // $('.modal-timer-text').css({ display: 'block' })
        // $('.modal-timer-text').text(`You still have time, you sure? 00:${seconds}`);

        $(".modal-container").css({
            backgroundColor: "rgba(0, 0, 0, 0.78)",
            zIndex: 3
        });

        $('.next').click(function () {
            $('.modal-timer-text').css({ display: 'none' });
            $('.modal-text').css({ display: 'block' });

            checkPosition();
        })


        closeModal();

        timerStarted = 0;
        count = 0;

    })

    $('.new').click(function () {
        console.log('BTN NEW CLICK');

        let parent = $(".left");
        let divs = parent.children();

        let goBlock = $('.go-block');
        // console.log(goBlock);

        for (let i = 0; i < goBlock.length; i++) {
            const element = goBlock[i];

            $('.img-style')[i].append(goBlock[i])

        }

        for (let i = 0; i < divs.length; i++) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0])
        }

        $('.check').prop('disabled', true);
        $('.check').css('backgroundColor', '#d35a5a');

        $('.start').prop('disabled', false);
        $('.start').css('backgroundColor', '#cf2f2f');

        $('.time-text').text(`01 : 00`);
        clearInterval(int);

        timerStarted = 0;
        count = 0;

    })

})
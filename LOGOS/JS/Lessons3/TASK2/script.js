// Необхідно реалізувати наступний функціонал як на відео taskList, а саме:
// — при кліку кнопку Додати додававляти нове завдання в список завдань
// — якщо при добавлянні поле пусте має вивести повідомлення у модальному вікні про попередження: “Пусте поле не можна добавити”
// — в списку завдань при кліку на чекбокс завдання має видалятися зі списку
// — якщо залишилося 1не завдання то його не можна видалити
// — якщо захочемо видалити то має вивести повідомлення у модальному вікні про попередження: “Останній таск зі списку Ви не можете видалити”

let buttons = document.forms[1].plus, //KNOPK
    inputText = document.forms[1].task, //Текст завдання
    list = document.forms[0], //Форма завднь
    checkBox = document.querySelectorAll('#checktask'), //Самі чекбокси
    label = document.querySelectorAll('.labeltask'); //Самілейбли
const TASKS = document.querySelector('.list');
const CHECK_BOX = document.querySelectorAll('#checktask');

buttons.addEventListener('click', function () {
    console.log('Yes');
    if (inputText.value != '') {
        console.log('Bad');
        // list.insertAdjacentHTML('beforeend', `<input type="checkbox" name="checktasks" id="checktask"><span class="checkText">${inputText.value}</span>`)
        list.insertAdjacentHTML('beforeend', `<label for="#" class="labeltask"><input type="checkbox" name="checktask" id="checktask"><span class="checkText">${inputText.value}</span></label>`)
        console.log(list);
        inputText.value = '';
    }
    else{
        console.log('pomulka')
        let taskError = document.querySelector('.error');
        taskError.style.display = 'block';
        taskError.style.width ='700px';
        let texterror = document.querySelector('.texterror');
        texterror.innerHTML = 'Пусте поле не можна добавити.'
        let close = document.querySelector('#close');
        close.addEventListener('click', function(){
            taskError.style.display = 'none';
        })
    }
});

inputText.oninput = () => {
  if(inputText.value.charAt(0) === ' ') {
    inputText.value = '';
  }
}

TASKS.addEventListener('click', function(event){
    if(list.length > 1 && event.target.checked ){
        console.log('Vhid')
        TASKS.removeChild(event.target.parentElement);
    }
    else if(list.length == 1){
        console.log('Vuhid')
        let taskError = document.querySelector('.error');
        taskError.style.display = 'block';
        document.querySelector('#checktask').checked = false;
        let close = document.querySelector('#close');
        close.addEventListener('click', function(){
            taskError.style.display = 'none';
        })
    }
})

//Невдала спроба через фор
// for (let i = 0; i < list.length; i++) {
//     TASKS.addEventListener('click', function () {
//         if (list.length > 1) {
//             TASKS.removeChild(event.target.parentElement);
//         }
//         else{
//             let taskError = document.querySelector('.error');
//             taskError.style.display = 'block';
//             document.querySelector('#checktask').checked = false;
//             let close = document.querySelector('#close');
//             close.addEventListener('click', function(){
//                 taskError.style.display = 'none';
//             })
//         }
//     })
// }


// TASKS.addEventListener('click', function(event){
//     if(list.length > 1 && event.target.checked ){
//         console.log('Vhid')
//         TASKS.removeChild(event.target.parentElement);
//     }
//     else{
//         let taskError = document.querySelector('.error');
//         taskError.style.display = 'block';
//         document.querySelector('#checktask').checked = false;
//         let close = document.querySelector('#close');
//         close.addEventListener('click', function(){
//             taskError.style.display = 'none';
//         })
//     }
// })

// function labelCkick(event){
    // label.addEventListener('click', function(event){
    //     console.log('Vhid V LABEl')
    // })
// }


//Праююча частина
// TASKS.addEventListener('click', function(event){
//     if(list.length > 1 && event.target.checked ){
//         console.log('Vhid')
//         TASKS.removeChild(event.target.parentElement);
//     }
    // else{
    //     let taskError = document.querySelector('.error');
    //     taskError.style.display = 'block';
    //     document.querySelector('#checktask').checked = false;
    //     let close = document.querySelector('#close');
    //     close.addEventListener('click', function(){
    //         taskError.style.display = 'none';
    //     })
    // }
// })
// console.log(newtask.elements)

// buttons.addEventListener('click', function(){
//     console.log('Yes');
//     if(inputText.value ==''){
//         console.log('Bad');
//     }
// })
//Праююча частина кінець


    // else if(inputText.value == ' '){
    //     inputText = '';
    // }
    // else{
    //     console.log('pomulka')
    //     let taskError = document.querySelector('.error');
    //     taskError.style.display = 'block';
    //     taskError.style.width ='700px';
    //     let texterror = document.querySelector('.texterror');
    //     texterror.innerHTML = 'Пусте поле не можна добавити.'
    //     let close = document.querySelector('#close');
    //     close.addEventListener('click', function(){
    //         taskError.style.display = 'none';
    //     })
        // document.createElement
//     }
// });

// inputText.oninput = () => {
//   if(inputText.value.charAt(0) === ' ') {
//     inputText.value = '';
//   }
// }

// TASKS.addEventListener('click', function(event){
    // if(event.target.type == 'checkbox' && event.target.checked){
//    if(list.length > 1 && event.target.checked ){
//         console.log('Vhid')
        // if(event.target.length > 1){
            
        // }
//         TASKS.removeChild(event.target.parentElement);
//     }
//     else{
//         let taskError = document.querySelector('.error');
//         taskError.style.display = 'block';
//         document.querySelector('#checktask').checked = false;
//         let close = document.querySelector('#close');
//         close.addEventListener('click', function(){
//             taskError.style.display = 'none';
//         })
//     }
// })

// for(let i = 0; i < list.length; i++){
//     checkBox[i].addEventListener('click', function(){
//         console.log('good');
//         if(list.length > 1) {
//             label[i].remove()
//         }
//     })
// }

// for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener('click', function () {
//         if (list.length > 1) {
//             label[i].remove();
//         }
//         else{
//             let taskError = document.querySelector('.error');
//             taskError.style.display = 'block';
//             document.querySelector('#checktask').checked = false;
//             let close = document.querySelector('#close');
//             close.addEventListener('click', function(){
//                 taskError.style.display = 'none';
//             })
//         }
//     })
// }


// container.addEventListener('click', function(event){
//     if(event.target.type =='labeltask' && event.target.checked){
//         list.removeChild(event.target.parentElement);
//     }
// })

// for(let i = 0; i < list.length; i++){
//     list[i].addEventListener('click', function(event){
//         console.log('good');
//         if(list.length > 1  ) {
//             label[i].remove()
//         }
//     })
// }

// for(let i = 0; i < list.length; i++){
    // checkBox[i].addEventListener('click', function(){
    //     if(list.length > 1){
    //         label[i].remove();
    //     }
    // })
// }

// button.addEventListener('click', function(){
//     console.log('Yes');
// })



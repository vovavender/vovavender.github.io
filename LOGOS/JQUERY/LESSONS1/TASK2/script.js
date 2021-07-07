// Завдання 2.
// Потрібно скопіювати в документ html в тег body нижче вказаний код. З допомогою команд jquery потрібно отримати текстове вмістиме 
//кожного з елементів, які вказані в списку нижче. Отримані текстові значення потрібно об’єднати в стрічку і вивести командою alert().

$(document).ready(function(){
    // console.log($('p').html())
    console.log($('i').html())
    console.log($('span').html())
    console.log($('b').html())
    console.log($('q').html())

    // console.log($('#second').html())
    console.log($('#s1').html())
    console.log($('.s2').html())
    console.log($('i:eq(1)').html())
    console.log($('q:eq(1)').html())
    console.log($('a').html())
    console.log($('a:eq(1)').html())
    console.log($('.extra:eq(1)').html())
    console.log($('b:eq(2)').html())

    let stringTask; 
    stringTask= $('i').html() + ' ' + $('span').html() + ' ' + $('b').html() + ' ' + $('q').html() + ' ' + $('#s1').html() +  ' ' + 
    $('.s2').html() +  ' ' + $('i:eq(1)').html() +  ' ' + $('q:eq(1)').html() +  ' ' + $('a').html() +  ' ' + $('a:eq(1)').html() +  ' ' +
    $('.extra:eq(1)').html() +  ' ' + $('b:eq(2)').html();
     alert(`Текстові значення: ${stringTask}`)
});
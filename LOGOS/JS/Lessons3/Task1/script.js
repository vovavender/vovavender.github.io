// console.log(window.scrollY);
window.addEventListener('scroll', function(event){
    console.log(window.scrollY);
})

window.addEventListener('resize', function(){
    console.log(window.innerWidth, window.innerHeight);
})

const textSize = document.querySelector('.one');

window.addEventListener('scroll', function(event){
    if(window.scrollY >= 200){
        textSize.style.fontSize = `${window.scrollY/10}px`
    }
    if(window.scrollY >= 300){
        textSize.style.fontSize = '45px'
    }
})

//Перший варіант
// const centerPos = document.querySelector('.content')
// const imagesPos = document.querySelector('.right-img')

// window.addEventListener('scroll', function(event){
//     if(window.scrollY >= 450){
//         centerPos.style.background = 'coral';
//         centerPos.style.left = `${window.scrollY/3}px`
//         imagesPos.style.border = '5px solid coral';
//         imagesPos.style.right= `${window.scrollY/3}px`
//     }
// })

const centerPos = document.querySelector('.content');
const imagesPos = document.querySelector('.right-img');
const lineWidth = document.querySelector('.line');


window.addEventListener('scroll', function(event){
    if(window.scrollY <= 1100){
        centerPos.style.left = `${window.scrollY/5}px`
        imagesPos.style.right= `${window.scrollY/3}px`
        lineWidth.style.width = `${window.scrollY/3}px`
    }
})

// const imagesPos = document.querySelector('.right-img')

// window.addEventListener('scroll', function(event){
//     if(window.scrollY >= 650){
//         imagesPos.style.border = '5px solid coral';
//         imagesPos.style.right= `${window.scrollY/3}px`
//     }
// })

// document.querySelector('.textthree').addEventListener('click', () => {
//     window.scroll({
//         top:0,
//         behavior:'smooth'
//     })
//     document.querySelector('.one').style.fontSize = '25px'
// })

// document.querySelector('.one').addEventListener('click', () => {
//     document.querySelector('.textthree').scrollIntoView({
//         behavior:'smooth'
//     })
// })

document.querySelector('.three').addEventListener('click', () => {
    document.querySelector('.one').scrollIntoView({
        behavior:'smooth'
    })
    document.querySelector('.one').style.fontSize = '25px'
})

document.querySelector('.one').addEventListener('click', () => {
    document.querySelector('.three').scrollIntoView({
        behavior:'smooth'
    })
})

// const centerPos = document.querySelector('.two');

// window.addEventListener('scroll', function(event){
//     if()
// })

// window.addEventListener('scroll', function(event){
//     console.log(window.scrollY)
//     if(window.scrollY >= 200){
//         document.getElementById('text').style.fontSize = '35px';
//         // document.getElementById('text').style.fontSize = `${window.scrollY}, ${window.scrollY}, ${window.scrollY}, ${window.scrollY}`
//     }
//     if(window.scrollY >=250){
//         document.getElementById('text').style.fontSize = '40px';
//         // document.getElementById('text').style.fontSize = `${window.scrollY}, ${window.scrollY}, ${window.scrollY}, ${window.scrollY}`
//     }

//     if(window.scrollY >= 400){
//         document.getElementById('text').style.fontSize = '50px';
//         // document.getElementById('text').style.fontSize = `${window.scrollY}, ${window.scrollY}, ${window.scrollY}, ${window.scrollY}`
//     }
// })

// window.addEventListener('scroll', () => {
//     // document.getElementById('text').style.fontSize = '50px';
    // if(window.scrollY<=800){
    //     document.getElementById('text').style.fontSize = '35px';
    // }
// })

// window.addEventListener('scroll', function(event){
//     if(window.scrollY >= 200){
//         textSize.style.fontSize = `${window.scrollY/12}px`
//         if(window.scrollY <=750){
//             textSize.style.fontSize = '80px'
//         }
//     }
// })
    // else if(window.scrollY >= 300 || window.scrollY <= 700){
    //     textSize.style.fontSize = `80px`
    // }


// window.addEventListener('scroll', function(event){
//     if(window.scrollY <= 200){
//         textSize.style.fontSize = '18px';
//     }
//     else if(window.scrollY >= 200){
//         textSize.style.fontSize = `${window.scrollY/10}px`;
//     }

//     else if(window.scrollY <= 250){
//         textSize.style.fontSize = '60px';
//     }

//     // else if(window.scrollY <= 200){}
// })



// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("text").style.fontSize = `${window.scrollY/6} px`;
//   } else {
//     document.getElementById("text").style.fontSize = "90px";
//   }
// }

// const textSize = document.querySelector('#text');

// function myScroll(){
//     if(window.scrollY <= 500){
//         textSize.style.fontSize = `${window.scrollY/6}px`
//     }
//     else{
//         window.removeEventListener('scroll', myScroll)
//     }
// }

// window.addEventListener('scroll', myScroll)


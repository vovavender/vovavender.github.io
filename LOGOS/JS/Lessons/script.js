let box = document.querySelectorAll('.box');
window.addEventListener('keydown', function(event){
    console.log(event)
    console.log(event.keyCode);
    console.log(event.key)
    for (let i = 0; i < box.length; i++){
        if(box[i].textContent == event.key){
            box[i].classList.add('active');
            // document.querySelector('#area').value += event.key;
            // document.querySelector('#area').value += event.key;
        }
    }
    
        if( event.key != 'Backspace' && event.key != 'CapsLock' && event.key != 'Tab' && event.key != 'Enter' && event.key != 'Shift'){
            document.querySelector('#area').value += event.key;
        }

        //BACKSPACE

        // if( event.code ==='Backspace' ){
        //     // if (event.key == 8 || event.key == 46) return false;
        //     // let backs = document.querySelector('#area');
        //     document.querySelector('#area').value.substring(document.querySelector('#area').value.length -1 );
        //     console.log('THE Back =', event.key)
        // }

        if(event.key == 'Backspace'){
            document.querySelector('#area').value = document.querySelector('#area').value.substring(0, document.querySelector('#area').value.length - 1);
        }

        // if(event.code == 'Backspace'){
        //     let del = document.querySelector('#area').textContent.substring(0,document.querySelector('#area').textContent.length-1);
        //     document.querySelector('#area').textContent = del;
        // }

        //TAB

        if( event.keyCode == 9 ){
            event.preventDefault();
            document.querySelector('#area').value += '\t';
            console.log('THE tab', event.key)
        }

        //CAPSLOCK
        if( event.keyCode == 20 ){
            document.querySelector('#area').value.toUpperCase();
            console.log('THE CAPSLOCK', event.key)
        }

        //SHIFT LEFT
        for( let i =0; i<=box.length; i++){
            if(event.keyCode == event.key){
               box[i].style.background = 'darkgray'; 
            }
            else if(event.code == 'ShiftLeft'){
                box[52].style.background = 'white';
                console.log('VUVELo')
            }
            else if(event.code == 'ShiftRight'){
                box[41].style.background = 'white';
                console.log('VUVELo dva')
            }
        }

        // if( event.code == 'ShiftLeft'){
        //     // box[20].classList.remove('active');
        //     // box[21].classList.add('prov');
        //     console.log('BYV CORAL', event.key);
        //     event.preventDefault();
        //     document.querySelector('#area').value.toUpperCase();
        // }

        // if( event.code == 'ShiftLeft'){
        //     // box[20].classList.remove('active');
        //     // box[21].classList.add('prov');
        //     console.log('BYV CORAL', event.key);
        //     event.preventDefault();
        //     document.querySelector('#area').value.toUpperCase();
        // }

        // if( event.location === 1 || event.code == 'ShiftLeft' || event.key == 'Shift' + event.key ){
        //     // box[20].classList.remove('active');
        //     // box[21].classList.add('prov');
        //     console.log('BYV CORAL', event.key);
        //     event.preventDefault();
        //     document.querySelector('#area').value.toUpperCase();
        // }

        // //SHIFT RIGHT

        //  else if( event.code === 'ShiftRight' || event.location === 2 || event.key == 'Shift' + event.key ){

        //     console.log('BYV CORAL RIGTH', event.key);
        //     event.preventDefault();
        //     document.querySelector('#area').value.toUpperCase();
        // }

        // if( event.code == 'ShiftLeft'+ event.key){
        //     event.preventDefault();
        //     document.querySelector('#area').value.toUpperCase();
        // }

        //ENTER
        if( event.keyCode == 13 ){
            event.preventDefault();
            document.querySelector('#area').value += '\n';
        }

        //PROBIl
        if(event.keyCode == 32 ){
            document.querySelector('#area').value += '';
        }

    })

    window.addEventListener('keyup', function(){
        for(let i = 0; i<box.length; i++){
            if(box[i].textContent == event.key){
                box[i].classList.remove('active');
            }
            
        }
    })


        // if( event.key == 'Shift'+ event.key){
        //     event.preventDefault();
        //     document.querySelector('#area').value.toUpperCase();
        // }

        // if( event.key == "Tab" ){
        //     box[14].classList.add('active');
        //     event.preventDefault();
        //     document.querySelector('#area').value += '\t';
        // }

        // if( event.key == "Enter" ){
        //     box[40].classList.add('active');
        //     event.preventDefault();
        //     document.querySelector('#area').value += '\n';
        // }

        // if(event.key == 'Backspace'){
        //     box[13].classList.add('active');
        //     document.querySelector('#area').value.substr(0, document.querySelector('#area').value.length - 1);
        // }

        // if(event.key = 'Tab'){
        //     box[14].classList.add('active')
        //     event.preventDefault();
        //     document.querySelector('#area').value += '\t';
        // }

        // if(event.key = 'CapsLock'){
        //     box[28].classList.add('active');
        // }
        
    // }
    
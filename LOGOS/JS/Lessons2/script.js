const checkbox = document.querySelector('#agree');
const btn_submit = document.querySelector('#sign');
checkbox.addEventListener('change', () => {
    if ( checkbox.checked ) {
		btn_submit.removeAttribute('disabled')
		btn_submit.style.background = '#46be4e';
        // document.querySelector('#sign').addEventListener('click', function(event){
        //     console.log('good')
            
        // })
	} else {
        btn_submit.setAttribute('disabled', 'true');
		btn_submit.style.background = '#3c9942';
	}
});

let one = document.getElementById('first');

one.oninput = () => {
  if(one.value.charAt(0) === ' ') {
    one.value = '';
  }
}

let two = document.getElementById('second');

two.oninput = () => {
  if(two.value.charAt(0) === ' ') {
    two.value = '';
  }
}

function submitForm(){
    event.preventDefault();
    console.log('YES');
    
    document.querySelector(".form").style.display = "none";
	document.querySelector(".profil-man").style.display = "block";
  
	let formsInfo = document.forms.f3;
	let name = formsInfo.first.value;
	document.querySelector('.firstname').textContent = name;

	let secondName = formsInfo.second.value;
	document.querySelector('.secondtname').textContent = secondName;

	let emailAdress = formsInfo.email.value;
	document.querySelector(".profil-email").innerHTML = emailAdress;
  
	let jobs = formsInfo.select.value;
	document.querySelector(".jobs").innerHTML = "Position:" + jobs;
	
	let accountForm = document.forms.profilman;
	let articles = formsInfo.article.value;
	if (articles === "man") {
	  let image = document.getElementById("avatar");
	  image.src = "images/profile.png";
	  image.style.width = '100px'
	} else {
	  let image = document.getElementById("avatar");
	  image.src = "images/woman.png";
	  image.style.width = '100px'
	}
}

// let goBack = function (){
//     //здесь можно добавить обработку какой-нибудь логики, при желании
//     window.history.back();
    
//     let forms
// };


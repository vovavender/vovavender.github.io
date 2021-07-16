const getS = (selector) => document.querySelector(selector);

let loginRegExp = /^[a-zA-Z]{2,20}$/;
let lastRegExp = /^[a-zA-Z]{2,20}$/;
let emailRegExp = /^\S+@\S+\.\S{2,5}/;
let passRegExp = /^[a-zA-Z0-9]{8,16}$/;

// function handlerInput(regexp, id, className) {
//     let testLogin = regexp.test(getS(`${id}`).value);
//     if (testLogin) {
//         console.log(testLogin, 'GOOD First')
//         this.style.border = '1px solid green';
//         getS(`${className}`).style.display = 'none';
//     }
//     else {
//         this.style.border = '1px solid red';
//         console.log(testLogin, 'No First')
//         getS(`${className}`).style.display = 'block';
//     }
// }

// getS('#login').oninput = handlerInput(loginRegExp, '#login', '.wrong-name');
// getS('#last').oninput = handlerInput(lastRegExp, '#last', '.wrong-last');
// getS('#email').oninput = handlerInput(emailRegExp, '#email', '.wrong-email');
// getS('#password').oninput = handlerInput(loginRegExp, '#password', '.wrong-password');

getS("#login").oninput = function () {
  let testLogin = loginRegExp.test(getS("#login").value);
  if (testLogin) {
    console.log(testLogin, "GOOD First");
    this.style.border = "1px solid green";
    getS(".wrong-name").style.display = "none";
  } else {
    this.style.border = "1px solid red";
    console.log(testLogin, "No First");
    getS(".wrong-name").style.display = "block";
    disableSignUp();
  }
};

getS("#last").oninput = function () {
  let testLast = lastRegExp.test(getS("#last").value);
  this.style.border = "1px solid green";
  if (testLast) {
    console.log(testLast, "GOOD Last");
    getS(".wrong-last").style.display = "none";
  } else {
    this.style.border = "1px solid red";
    console.log(testLast, "NO Last");
    getS(".wrong-last").style.display = "block";
    disableSignUp();
  }
};

getS("#email").oninput = function () {
  let testEmail = emailRegExp.test(getS("#email").value);
  this.style.border = "1px solid green";
  if (testEmail) {
    console.log(testEmail, "GOOD EMAIl");
    getS(".wrong-email").style.display = "none";
  } else {
    this.style.border = "1px solid red";
    console.log(testEmail, "NO EMAIl");
    getS(".wrong-email").style.display = "block";
    disableSignUp();
  }
};

getS("#password").oninput = function () {
  let testPassword = passRegExp.test(getS("#password").value);
  this.style.border = "1px solid green";
  if (testPassword) {
    console.log(testPassword, "GOOD PASS");
    getS(".wrong-password").style.display = "none";
  } else {
    this.style.border = "1px solid red";
    console.log(testPassword, "NO PASS");
    getS(".wrong-password").style.display = "block";
    disableSignUp();
  }
};

function greateForm() {
  event.preventDefault();
  getS('.greate').style.display = "block";
  getS('.back-bg').style.background = "gray";
  getS('.back-bg').style.zIndex = "2";
  // getS('#form-btn').setAttribute('disabled', 'true');
  getS('#form-btn').style.background = 'red';

  // getS('#checked').disabled = true;
  // getS('#form-btn').disabled = false;

  // if (getS('#checked').checked) {

  //   getS('#checked').checked = "false";

  // } else {
  //   getS('#checked').checked = "true";

  // }

  if(checkTrue.checked){
    getS('#checked').checked = false;
    getS('#checked').disabled = true;
  }
  else{
    getS('#checked').disabled = false;
    getS('#checked').checked = false;
  }

}

//KNOPKA GREATE
getS("#greate-btn").addEventListener("click", function () {
  getS(".greate").style.display = "none";
  getS(".back-bg").style.background = "white";
  // getS('#form-btn').disabled = true;
  // getS('#global-form').reset();

  getS("#login").style.border = "1px solid #858585";
  getS("#login").value = "";

  getS("#last").style.border = "1px solid #858585";
  getS("#last").value = "";

  getS("#email").style.border = "1px solid #858585";
  getS("#email").value = "";

  getS("#password").style.border = "1px solid #858585";
  getS("#password").value = "";

  getS("#form-btn").style.background = "#009bd8";

  // getS("#form-btn").disabled = true;

  getS('#checked').disabled = false;

  getS('#form-btn').disabled = true;

  // getS('#checked').disabled = false;
  // getS('#checked').checked = false;

  // if(checkTrue.checked){
  //   checkTrue.checked = false;
  // }
});

function checkParams() {
  // const getS = selector => document.querySelector(selector);
  let nameTrue = getS("#login").value;
  let lastTrue = getS("#last").value;
  let emailTrue = getS("#email").value;
  let passTrue = getS("#password").value;
  if (
    nameTrue.length != 0 &&
    lastTrue.length != 0 &&
    emailTrue.length != 0 &&
    passTrue.length != 0
  ) {
  } else {
    getS("#form-btn").disabled = true;
    getS("#form-btn").style.background = "#009bd8";
  }
}

function checkInputs() {
  return (
    passRegExp.test(getS("#password").value) &&
    emailRegExp.test(getS("#email").value) &&
    lastRegExp.test(getS("#last").value) &&
    loginRegExp.test(getS("#login").value)
  );
}

const checkTrue = getS("#checked");
checkTrue.addEventListener("click", function () {
  // debugger;
  if (checkTrue.checked) {
    checkParams();

    if (checkInputs()) {
      getS("#form-btn").disabled = false;
      getS("#form-btn").style.background = "#005ed8";
      console.log("Клік по кнопці дозволено");
    } else {
      disableSignUp();
    }
  } else {
    disableSignUp();
  }
});

function disableSignUp() {
  getS("#form-btn").disabled = true;
  getS("#form-btn").style.background = "#009bd8";
  const checkTrue = getS("#checked");
  checkTrue.checked = false;
}

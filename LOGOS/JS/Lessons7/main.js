// 1. Потрібно реалізувати функціонал як на відео UserList, а саме:
// 1. При кліку на кнопку Add user запускаєте функцію addUser() яка робить наступне:
// a. Стягуєте дані з полів і формує об’єкт.
// b. Цей об’єкт пушите в масив.
// c. Поля зачищає.
// d. Запускаєм функцію render() яка генерую всю інфу в таблицю відносно вашого масиву.

// 5. Всі поля форми потрібно валідувати перед добавленням, а саме:
// a. Login: може бути слово англійською з великої або маленької букви від 4 до 16 символів.
// b. Password: можуть бути букви, цифри, символ нижнього підкреслювання(_), тире(-) та символ крапки(.) від 4 до 16 символів
// c. Email: обов'язково @. Усі букви повинні бути англійською. Загальні вимоги наступні(будь-яка кількість букв, цифр, тире і крапок@будьяка кількість букв.( net.ua, org.ua, gmail.com. і т.д.)).

const getS = (selector) => document.querySelector(selector);

let loginRegExp = /^[a-zA-Z]{4,16}$/;
let passRegExp = /^[a-zA-Z0-9]{4,16}$/;
let emailRegExp = /^\S+@\S+\.\S{2,5}/;

function startSubmit() {
  if (
    loginRegExp.test(getS("#login").value) &&
    passRegExp.test(getS("#password").value) &&
    emailRegExp.test(getS("#email").value)
  ) {
    getS("#submit").disabled = false;
    getS("#submit").style.background = "green";
    getS("#submit").style.color = "white";
  } else {
    getS("#submit").disabled = true;
    getS("#submit").style.background = "none";
    getS("#submit").style.color = "green";
  }
}

let td1, td2, td3, td4, td5, td6;

let usersArray = [];

function addUser() {
  event.preventDefault();

  let users = {
    login: `${getS("#login").value}`,
    password: `${getS("#password").value}`,
    email: `${getS("#email").value}`,
    editBtn: `<input type="button" value="Edit" id="edit-btn" onclick="editUser(event)">`,
    delBtn: `<input type="button" value="Delete" id="delete-btn" onclick="deleteUser(event)">`,
  };

  console.log("MyObj", users);

  usersArray.push(users);
  console.log("Masuv", usersArray);

  render(usersArray);
}

function render(usersArray) {
  while (getS("#tab1").getElementsByTagName("TBODY")[0].firstChild) {
    getS("#tab1").getElementsByTagName("TBODY")[0].removeChild(getS("#tab1").getElementsByTagName("TBODY")[0].lastChild);
  }

  let tblTbody = getS("#tab1").getElementsByTagName("TBODY")[0];
  tblTbody.setAttribute("id", "tbody");

  usersArray.forEach((user, index) => {
      let row = document.createElement("TR");
      row.setAttribute("id", "row-tr");
    //   row.setAttribute("class", "row-tr");
      tblTbody.appendChild(row);

      td1 = document.createElement("TD");
      td1.setAttribute("id", "tdOne");

      td2 = document.createElement("TD");
      td3 = document.createElement("TD");
      td4 = document.createElement("TD");
      td5 = document.createElement("TD");
      td5.setAttribute("id", "tdEdit");
      td6 = document.createElement("TD");
      td6.setAttribute("id", "tdDelete");

      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      row.appendChild(td5);
      row.appendChild(td6);

      td1.innerHTML = index+1;
      td2.innerHTML = user.login;
      td3.innerHTML = user.password;
      td4.innerHTML = user.email;
      td5.innerHTML = user.editBtn;
      td6.innerHTML = user.delBtn;

});

  getS(".formAdd").reset();

  getS("#submit").disabled = true;
  getS("#submit").style.background = "none";
  getS("#submit").style.color = "green";
}

// ЗАВДАННЯ 2. При кліку на кнопку Delete запускаєте функцію deleteUser() яка робить наступне:
// a. Дізнаєтеся в якому рядку ви клікнули(тобто індекс).
// b. По цьому індексу видаляємо елемент з масиву.
// c. Запускаєм заново функцію render().
// console.log('Не змінений масив перед кліком на видалення',usersArray)

function deleteUser(event) {
  console.log("Click", event.target);
  let indexUser = event.target.parentNode.parentNode; // tr element рядок
  let indexToDelete = indexUser.children[0].innerHTML;
  // console.log('TD в якому є порядковий номер',indexUser.children[0]); //
  // console.log('Сама цифра яка є в ТД',indexUser.children[0].innerHTML);

  usersArray.splice(indexToDelete - 1, 1);
  indexUser.parentElement.removeChild(indexUser); // видаляєм весь рядок

  console.log("Дані які залишились після видалення", usersArray);
  // render() добавляє новий пустий елемент з індексом посліднього елемента
  render(usersArray)
}

// TASK 3. При кліку на кнопку Edit запускаєте функцію editUser() яка робить наступне:
// a. Дізнаєтеся в якому рядку ви клікнули(тобто індекс).
// b. По цьому індексу витягуємо конкретрний елемент(тобто об’єкт) з масиву.
// c. З об’єкт достаємо дані і передаємо в форму(тобто у value інпутів).
// d. Запам’ятовуємо даний індекс в змінну userIndex.
// e. Показуємо кнопку Edit user і приховуємо Add user.
let userIndexToEdit;

function editUser(event) {
  console.log(event.target);

  let clickEdit = event.target.parentNode.parentNode;
  console.log("ELE OF CLICK", event.target.parentNode.parentNode);
  // console.log(event.target.parentNode.parentNode.parentNode.children) HTML colection for BODy

  // console.log('mY ELEm', clickEdit.children);
//   debugger;
  let indexEdit = clickEdit.children;
  userIndexToEdit = clickEdit.children[0].innerHTML;

  console.log(indexEdit);

  getS("#login").value = indexEdit[1].innerHTML;
  getS("#password").value = indexEdit[2].innerHTML;
  getS("#email").value = indexEdit[3].innerHTML;

  getS("#submit").style.display = "none";

  getS("#bottom-edit").style.display = "block";

  getS("#login").onkeyup = validEdit;
  getS("#password").onkeyup = validEdit;
  getS("#email").onkeyup = validEdit;
  getS(".formAdd").onsubmit = saveEditUser;

  console.log("ELEMENT CLICK IN EDIT", clickEdit);
  console.log("MASUV V EDIT", usersArray);
}

//TASk 4. При кліку на кнопку Edit User запускаєте функцію saveEditUser() яка робить наступне:
// a. Стягуєте дані з полів і формує об’єкт через клас.
// b. Цей об’єкт додається на місце старого об’єкту через userIndex.
// c. Поля зачищає.
// d. Запускаєм функцію render() яка генерую всю інфу в таблицю відносно вашого масиву.

function validEdit() {
  if (
    loginRegExp.test(getS("#login").value) &&
    passRegExp.test(getS("#password").value) &&
    emailRegExp.test(getS("#email").value)
  ) {
    //btnEDITuseR
    getS("#edit-user").disabled = false;
    getS("#edit-user").style.background = "green";
    getS("#edit-user").style.color = "white";
  } else {
    getS("#edit-user").disabled = true;
    getS("#edit-user").style.background = "none";
    getS("#edit-user").style.color = "green";
  }
}

class User {
  constructor(login, password, email) {
    this.login = login;
    this.password = password;
    this.email = email;
  }
}

function saveEditUser() {
  event.preventDefault();

  let user = new User(
    getS("#login").value,
    getS("#password").value,
    getS("#email").value
  );

  usersArray[userIndexToEdit - 1].email = user.email;
  usersArray[userIndexToEdit - 1].login = user.login;
  usersArray[userIndexToEdit - 1].password = user.password;

  let elementToEdit = getS("#tab1").getElementsByTagName("TBODY")[0].children[
    userIndexToEdit - 1
  ];
//   debugger;
  elementToEdit.children[1].innerHTML = user.login;
  elementToEdit.children[2].innerHTML = user.password;
  elementToEdit.children[3].innerHTML = user.email;

  getS("#bottom-edit").style.display = "none";

  getS("#submit").style.display = "block";

  getS(".formAdd").reset();

  getS("#login").onkeyup = startSubmit;
  getS("#password").onkeyup = startSubmit;
  getS("#email").onkeyup = startSubmit;
  getS(".formAdd").onsubmit = addUser;
}

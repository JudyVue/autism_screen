'use strict';
var loginForm = document.getElementById('loginForm');
var loginArray = [];
var loginArrayStringified;


function handleNewLogin() {
  event.preventDefault();
  var username = event.target.username.value;
  var password = event.target.password.value;
  function Login(username, password) {
    this.username = username;
    this.password = password;
    loginArray.push(this);
  }
  new Login(username, password);
  loginArrayStringified = JSON.stringify(loginArray);
  localStorage.setItem('loginArrayStringified', loginArrayStringified);
  console.log(loginArrayStringified);
  location.href = 'instructions.html';

}

loginForm.addEventListener('submit', handleNewLogin);

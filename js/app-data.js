'use strict';
var loginForm = document.getElementById('loginForm');
var loginArray = [];
var loginArrayStringified;
var storedData = [];
localStorage.session = '';


function handleNewLogin() {
  event.preventDefault();
  var username = event.target.username.value;
  var password = event.target.password.value;

  //logic to keep people from taking the test with no username
  var usernameInput = document.forms["loginForm"]["username"].value;
  var passwordInput = document.forms["loginForm"]["password"].value;
  if ((usernameInput === null || usernameInput === '') && (passwordInput === null || passwordInput === '')){
    alert('Please enter a username and password.');
    return;
  };
  //username already exists logic:
  if (localStorage.loginArrayStringified) {
    storedData = JSON.parse(localStorage.loginArrayStringified);
    for (var i = 0; i < storedData.length; i++) {
      if (storedData[i].username === username) {
        alert('username already exists');
        event.target.username.value = null;
        event.target.password.value = null;
        return;
      }
    }
  }
  if (localStorage.loginArrayStringified) {
    loginArray = JSON.parse(localStorage.loginArrayStringified);
  }
  function Login(username, password) {
    this.username = username;
    this.password = password;
    this.score = 0;
    loginArray.push(this);
  }
  new Login(username, password);
  loginArrayStringified = JSON.stringify(loginArray);
  localStorage.setItem('loginArrayStringified', loginArrayStringified);
  location.href = 'instructions.html';

}



loginForm.addEventListener('submit', handleNewLogin);

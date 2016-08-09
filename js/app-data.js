'use strict';
var loginForm = document.getElementById('loginForm');
var loginArray = [];
var loginArrayStringified;
var storedData = [];


function handleNewLogin() {
  event.preventDefault();
  var username = event.target.username.value;
  var password = event.target.password.value;
  //username already exists logic:
  if (localStorage.loginArrayStringified) {
    storedData = JSON.parse(localStorage.loginArrayStringified);
    for (var i = 0; i < storedData.length; i++) {
      if (storedData[i].username === username) {
        console.log(storedData[i].username);
        alert('username already exists');
        event.target.username.value = null;
        event.target.password.value = null;
        return;
      }
    }
  }

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

'use strict';
var loginForm = document.getElementById('loginForm');
var loginArray = [];


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
  

}

loginForm.addEventListener('submit', handleNewLogin);

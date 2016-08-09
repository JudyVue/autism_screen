'use strict';
var loginForm = document.getElementById('loginForm');
var storedData = [];


function handleSignInAttempt() {
  event.preventDefault();
  var username = event.target.username.value;
  var password = event.target.password.value;
  //username already exists logic:
  if (localStorage.loginArrayStringified) {
    storedData = JSON.parse(localStorage.loginArrayStringified);
    for (var i = 0; i < storedData.length; i++) {
      if (storedData[i].username === username && storedData[i].password !== password) {
        alert('Username and password do not match. Please try again.');
        event.target.username.value = null;
        event.target.password.value = null;
        return;
      }
    }
  }
}

loginForm.addEventListener('submit', handleSignInAttempt);

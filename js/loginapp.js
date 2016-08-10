'use strict';
var loginForm = document.getElementById('loginForm');
var storedData = [];
var loginTry = 0;

function handleSignInAttempt() {
  event.preventDefault();
  var username = event.target.username.value;
  var password = event.target.password.value;
  //username already exists logic:
  if (localStorage.loginArrayStringified) {
    storedData = JSON.parse(localStorage.loginArrayStringified);
    if (loginTry < 3){
      for (var i = 0; i < storedData.length; i++) {
        if (storedData[i].username === username && storedData[i].password !== password) {
          alert('Username and password do not match. Please try again.');
          event.target.username.value = null;
          event.target.password.value = null;
        }
        loginTry++;
        console.log(loginTry);
        break;
      };
    }
  }
  if (loginTry === 3){
    alert('You have reached the maximum login attempts allowed. Please create a new account.');
    location.href = 'index.html';
  }
  for (var j = 0; j < storedData.length; j++) {
    if (storedData[j].username === username && storedData[j].password === password){
      location.href = 'instructions.html';
    }
  }
}

loginForm.addEventListener('submit', handleSignInAttempt);

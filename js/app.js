'use strict';
//Establishing Global Variables
var userSelections;
var questionArray = [];
var userAnswers = [];
var radioButtons = document.getElementsByClassName('radio_buttons');
var userAnswersStringified = [];

//Running Function and Checking Array
function createLocalStorageofScoreNoScoreArray(){
  userAnswersStringified = JSON.stringify(userAnswers);
  localStorage.setItem('userAnswersStringified', userAnswersStringified);
}

//code to hide and display test question divs on test_page.html
var question_set1 = document.getElementById('question_set1');
var question_set2 = document.getElementById('question_set2');
var question_set3 = document.getElementById('question_set3');
var question_set4 = document.getElementById('question_set4');
var question_set5 = document.getElementById('question_set5');



function showFirstQuestions(){
  question_set5.style.display = 'none';
  question_set4.style.display = 'none';
  question_set3.style.display = 'none';
  question_set2.style.display = 'none';
  question_set1.style.display = 'block';
}


function clickSection1Button() {
  var counter = 0;
  for (var i = 0; i < radioButtons.length - 32; i ++) {
    if (radioButtons[i].checked === true) {
      counter += 1;
    }
  }
  if (counter < 4) {
    alert('Complete all answers.');
    return;
  }
  question_set5.style.display = 'none';
  question_set4.style.display = 'none';
  question_set3.style.display = 'none';
  question_set2.style.display = 'block';
  question_set1.style.display = 'none';
}

function clickSection2Button() {
  var counter = 0;
  for (var i = 8; i < radioButtons.length - 24; i ++) {
    if (radioButtons[i].checked === true) {
      counter += 1;
    }
  }
  if (counter < 4) {
    alert('Complete all answers.');
    return;
  }
  question_set5.style.display = 'none';
  question_set4.style.display = 'none';
  question_set3.style.display = 'block';
  question_set2.style.display = 'none';
  question_set1.style.display = 'none';
}

function clickSection3Button(){
  var counter = 0;
  for (var i = 16; i < radioButtons.length - 16; i ++) {
    if (radioButtons[i].checked === true) {
      counter += 1;
    }
  }
  if (counter < 4) {
    alert('Complete all answers.');
    return;
  }
  question_set5.style.display = 'none';
  question_set4.style.display = 'block';
  question_set3.style.display = 'none';
  question_set2.style.display = 'none';
  question_set1.style.display = 'none';
}

function clickSection4Button(){
  var counter = 0;
  for (var i = 24; i < radioButtons.length - 8; i ++) {
    if (radioButtons[i].checked === true) {
      counter += 1;
    }
  }
  if (counter < 4) {
    alert('Complete all answers.');
    return;
  }
  question_set5.style.display = 'block';
  question_set4.style.display = 'none';
  question_set3.style.display = 'none';
  question_set2.style.display = 'none';
  question_set1.style.display = 'none';


}

//Event Handler- to tally user score when Event Listener is triggered

function handleArray(){
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked === true) {
      userAnswers.push(radioButtons[i].value);
    }
  }
}

function handleScore(){
  event.preventDefault();
  handleArray();
  var counter = 0;
  for (var i = 32; i < radioButtons.length; i ++) {
    if (radioButtons[i].checked === true) {
      counter += 1;
    }
  }
  if (counter < 4) {
    alert('Complete all answers.');
    return;
  }
  for (i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === 'score') {
    }
  }
  createLocalStorageofScoreNoScoreArray();
  location.href = 'reviewpage.html';
}


//code that does something on load:
showFirstQuestions();


//event listeners

document.getElementById('button1').addEventListener('click', clickSection1Button);
document.getElementById('button2').addEventListener('click', clickSection2Button);
document.getElementById('button3').addEventListener('click', clickSection3Button);
document.getElementById('button4').addEventListener('click', clickSection4Button);

document.getElementById('submit').addEventListener('click', handleScore);

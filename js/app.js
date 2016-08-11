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
  console.log(userAnswersStringified + ' is the stringified array.');
}

//code to hide and display test question divs on test_page.html
var question_set1 = document.getElementById('question_set1');
var question_set2 = document.getElementById('question_set2');
var question_set3 = document.getElementById('question_set3');
var question_set4 = document.getElementById('question_set4');
var question_set5 = document.getElementById('question_set5');

var counter = 0;

function showFirstQuestions(){
  question_set5.style.display = 'none';
  question_set4.style.display = 'none';
  question_set3.style.display = 'none';
  question_set2.style.display = 'none';
  question_set1.style.display = 'block';
}


function clickSection1Button() {
  question_set5.style.display = 'none';
  question_set4.style.display = 'none';
  question_set3.style.display = 'none';
  question_set2.style.display = 'block';
  question_set1.style.display = 'none';

}

function clickSection2Button() {
  question_set5.style.display = 'none';
  question_set4.style.display = 'none';
  question_set3.style.display = 'block';
  question_set2.style.display = 'none';
  question_set1.style.display = 'none';
}

function clickSection3Button(){
  question_set5.style.display = 'none';
  question_set4.style.display = 'block';
  question_set3.style.display = 'none';
  question_set2.style.display = 'none';
  question_set1.style.display = 'none';
}

function clickSection4Button(){
  question_set5.style.display = 'block';
  question_set4.style.display = 'none';
  question_set3.style.display = 'none';
  question_set2.style.display = 'none';
  question_set1.style.display = 'none';


}

//Event Handler- to tally user score when Event Listener is triggered

function handleArray(){
  event.preventDefault();
  userSelections = event.target.value;
  userAnswers.push(userSelections);
};

function handleScore(){
  for (var i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === 'score') {
    }
  }
  console.log(userAnswers);
  createLocalStorageofScoreNoScoreArray();
  location.href = 'reviewpage.html';
}


//code that does something on load:
showFirstQuestions();


//Event Listener- to capture user input from test_page.html and run event handler function handleScore
for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', handleArray);
}

document.getElementById('button1').addEventListener('click', clickSection1Button);
document.getElementById('button2').addEventListener('click', clickSection2Button);
document.getElementById('button3').addEventListener('click', clickSection3Button);
document.getElementById('button4').addEventListener('click', clickSection4Button);

document.getElementById('submit').addEventListener('click', handleScore);

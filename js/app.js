'use strict';

//Establishing Global Variables
var userSelections;
var questionArray = [];
var userAnswers = [];
var radioButtons = document.getElementsByClassName('radio_buttons');

//Creating Object Constructor Function
function QuestionCreator(instanceName, answer){
  this.instanceName = instanceName;
  this.answer = answer;
  questionArray.push(this);
};

//Creating Object Instances
var questionOne = new QuestionCreator('Question 1', 'no');
var questionTwo = new QuestionCreator('Question 2', 'yes');
var questionThree = new QuestionCreator('Question 3', 'no');
var questionFour = new QuestionCreator('Question 4', 'no');

var questionFive = new QuestionCreator('Question 5', 'yes');
var questionSix = new QuestionCreator('Question 6', 'no');
var questionSeven = new QuestionCreator('Question 7', 'no');
var questionEight = new QuestionCreator('Question 8', 'no');

var questionNine = new QuestionCreator('Question 9', 'no');
var questionTen = new QuestionCreator('Question 10', 'no');
var questionEleven = new QuestionCreator('Question 11', 'no');
var questionTwelve = new QuestionCreator('Question 12', 'yes');

var questionThirteen = new QuestionCreator('Question 13', 'no');
var questionFourteen = new QuestionCreator('Question 14', 'no');
var questionFifteen = new QuestionCreator('Question 15', 'no');
var questionSixteen = new QuestionCreator('Question 16', 'no');

var questionSeventeen = new QuestionCreator('Question 17', 'no');
var questionEighteen = new QuestionCreator('Question 18', 'no');
var questionNineteen = new QuestionCreator('Question 19', 'no');
var questionTwenty = new QuestionCreator('Question 20', 'no');

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

function handleArray(event){
  event.preventDefault();
  userSelections = event.target.value;
  userAnswers.push(userSelections);
};

function handleScore(event){
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

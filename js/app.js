'use strict';

//Establishing Global Variables
var score = 0;
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

//Event Handler- to tally user score when Event Listener is triggered

function handleArray(event){
  event.preventDefault();
  userSelections = event.target.value;
  userAnswers.push(userSelections);
};


for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', handleArray);
}

function handleScore(event){
  for (var i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === 'score') {
      score++;
    }
  }
  console.log(userAnswers);
  console.log(score);
  createLocalStorageofScoreNoScoreArray();
}

//Event Listener- to capture user input from test_page.html and run event handler function handleScore
document.getElementById('submit').addEventListener('click', handleScore);
//setting userAnswers to local storage, make function happen after array is filled



// var userAnswersFromLocalStorage = JSON.parse(localStorage.getItem('localStorageUserAnswers'));

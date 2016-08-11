'use strict';
//judy's JS code for accordion menu with contributions from Maelle and Rachael

var accordion = document.getElementsByClassName('accordion');
var reviewData = [];
var score = 0;
var reviewAnswersStringified;
var userAnswers = [];
var radioButtonsNoScore = [];
var radioButtonsYesScore = [];


function makeAccordion(){
  for (var i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function(){
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('show');
    };
  }
}


function parseData(){
  reviewData = JSON.parse(localStorage.userAnswersStringified);

}


//will check radio buttons with test answers data so user can review and change them
function grabYesAndNos(){
  for (var j = 0; j < reviewData.length; j++){
    if (reviewData[j] === 'no_score') {
      radioButtonsNoScore[j].checked = true;
      console.log('checking no scores');
    }else {
      radioButtonsYesScore[j].checked = true;
    }
  }
}


//we are getting all the buttons with a no score value
function getNoScore(){

  var counter = 0;
  for (var i = 0; i < radioButtons.length; i++){
    if (radioButtons[i].value === 'no_score'){
      radioButtonsNoScore.push(radioButtons[i]);
    }
  }
}

//getting all the buttons with score value
function getYesScore() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].value === 'score'){
      radioButtonsYesScore.push(radioButtons[i]);
    }
  }
}

//saving user reviewed answers in local storage
function createLocalStorageofScoreNoScoreArray(){
  reviewAnswersStringified = JSON.stringify(userAnswers);
  localStorage.setItem('reviewAnswersStringified', reviewAnswersStringified);
  console.log(reviewAnswersStringified + ' is the stringified array.');
}

// this handle our array of user answers
function handleArray() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked === true) {
      userAnswers.push(radioButtons[i].value);
    }
  }
};

//finally, scoring our test with final answers from user, storing it and sending user to review page
function handleScore(event){
  event.preventDefault();
  handleArray();
  for (var i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === 'score') {
      score++;
    }
  }
  console.log(userAnswers);
  createLocalStorageofScoreNoScoreArray();
  var scoreStringified = JSON.stringify(score);
  localStorage.setItem('score', scoreStringified);
  location.href = 'results.html';
}

//code on load:
makeAccordion();
getYesScore();
getNoScore();
parseData();
grabYesAndNos();


//event listener:
document.getElementById('confirm').addEventListener('click', handleScore);

'use strict';
//judy's JS code for accordion menu with contributions from Maelle and Rachael

var accordion = document.getElementsByClassName('accordion');
var reviewData = [];
var score = 0;
var reviewAnswersStringified;
var userSelections;
var userAnswers = [];
var radioButtonsNoScore = [];
var radioButtonsYesScore = [];
var radioButtons = document.getElementsByClassName('radio_buttons');

function makeAccordion(){
  for (var i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function(){
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('show');
    };
  }
}


//code for retaining user's answers on reivewpage.html

//parses the data
function parseData(){
  reviewData = JSON.parse(localStorage.userAnswersStringified);
}

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


function getNoScore(){
  for (var i = 0; i < radioButtons.length; i++){
    if (radioButtons[i].value === 'no_score'){
      radioButtonsNoScore.push(radioButtons[i]);
    }
  }
}

function getYesScore() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].value === 'score'){
      radioButtonsYesScore.push(radioButtons[i]);
    }
  }
}

getYesScore();
getNoScore();
function createLocalStorageofScoreNoScoreArray(){
  reviewAnswersStringified = JSON.stringify(userAnswers);
  localStorage.setItem('reviewAnswersStringified', reviewAnswersStringified);
  console.log(reviewAnswersStringified + ' is the stringified array.');
}

function handleArray(event){
  event.preventDefault();
  userSelections = event.target.value;
  userAnswers.push(userSelections);
};

function handleScore(event){
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
parseData();
grabYesAndNos();

for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', handleArray);
}

document.getElementById('confirm').addEventListener('click', handleScore);

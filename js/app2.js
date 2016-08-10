'use strict';
//judy's JS code for accordion menu with contributions from Maelle and Rachael

var accordion = document.getElementsByClassName('accordion');

function makeAccordion(){
  for (var i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function(){
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('show');
    };
  }
}
makeAccordion();


//code for retaining user's answers on reivewpage.html
var reviewData = [];
var noArray;
var yesArray;

//parses the data
function parseData(){
  reviewData = JSON.parse(localStorage.userAnswersStringified);
}
parseData();

//grabs the name = 'No' value of the input from HTML
function pushNosIntoArray() {
  var no = document.getElementsByName('No');
  noArray = Array.prototype.slice.call(no);
}

//grabs the name = 'Yes' value of the input from HTML
function pushYesesIntoArray() {
  var yes = document.getElementsByName('Yes');
  yesArray = Array.prototype.slice.call(yes);
}

pushYesesIntoArray();
pushNosIntoArray();

//retains the user's selections from the previous questions as they review
function grabYesAndNos(){
  for (var j = 0; j < reviewData.length; j++) {
    if (reviewData[j] === 'score') {
      noArray[j].checked = true;
    } else if (reviewData[j] === 'no_score'){
      yesArray[j].checked = true;
    }
  }
}
grabYesAndNos();

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
showFirstQuestions();

function clickSection1Button() {
  // if (question_set1.style.dislay !== 'none' || question_set2.style.display !== 'none' || question_set3.style.display !== 'none' || question_set4.style.display !== 'none') {
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


// var inputs = document.getElementsByName('input');
// var radios = [];

//
// for (var l = 0; l < inputs.length; ++ l) {
//   if(inputs[i].type === 'radio') {
//     radios.push(inputs[i]);
//   }
// }

var notChecked = false;

function makeUserAnswerAllQuestions(){
  for (var j = 0; j < reviewData.length; j++) {
    if(!(noArray[j].checked || !yesArray[j].checked)){
      alert('You must complete all questions before moving on.');
      notChecked = true;
    }
  }
  console.log('Are you fucking working?');
}


//TRYING TO FIGURE OUT HOW TO MAKE THIS SHIT DRY
// function clickNextButton() {
//  for (var k = 0; k < questionset.length; ++k) {
//     var s = questionset[i].style;
//     s.display = s.display === 'none' ? 'block' : 'none';
//     console.log('Hello.');
//  }
// }

document.getElementById('button1').addEventListener('click', clickSection1Button);
document.getElementById('button2').addEventListener('click', clickSection2Button);
document.getElementById('button3').addEventListener('click', clickSection3Button);
document.getElementById('button4').addEventListener('click', clickSection4Button);

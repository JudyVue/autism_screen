'use strict';

var checked = false;
var TestSectionDivArray = [];

function makeTestSectionDivArray() {
  for (var i = 0; i < document.getElementsByClassName('questionset').length; i++){
    TestSectionDivArray.push(document.getElementsByClassName('questionset')[i]);
  }
  console.log(TestSectionDivArray);
}

function makeUserAnswerAllQuestions(){
  for (var i = 0; i < radioButtons.length; i++) {
    if(!radioButtons[i].checked){
      console.log('There is a radio button not checked.');
    }
  }
}

function makeTestSectionDivArray() {
  for (var i = 0; i < document.getElementsByClassName('questionset').length; i++){
    TestSectionDivArray.push(document.getElementsByClassName('questionset')[i]);
  }
  console.log(TestSectionDivArray);
}

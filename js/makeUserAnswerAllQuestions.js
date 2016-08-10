'use strict';

var checked = false;
var testSectionDivArray = [];

function makeTestSectionDivArray() {
  for (var i = 0; i < document.getElementsByClassName('questionset').length; i++){
    testSectionDivArray.push(document.getElementsByClassName('questionset')[i]);
  }
  // console.log(testSectionDivArray);
}

makeTestSectionDivArray();

function makeUserAnswerAllQuestions(){
  for(var j = 0; j < radioButtons.length; j++) {
    if(radioButtons[j].checked === false){
      console.log('A radio buttons is not checked.');
      alert('A radio buttons is not checked.');
      break;
    } else {
      console.log('Radio butons are checked.');
    }
  }
}

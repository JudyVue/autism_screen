'use strict';

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
      console.log('a button isnt checked.');
      alert('You must complete all questions.');
    }
  }
}

makeUserAnswerAllQuestions();


// function logArrayElements(element, index, array) {
//   console.log('a[' + index + '] = ' + element);
// }
//
// // Notice that index 2 is skipped since there is no item at
// // that position in the array.
// [2, 5, , 9].forEach(logArrayElements);
// // logs:
// // a[0] = 2
// // a[1] = 5
// // a[3] = 9

var score = 0;

var scoreStringified = JSON.stringify(score);
localStorage.setItem('score', scoreStringified);



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


TRYING TO FIGURE OUT HOW TO MAKE THIS SHIT DRY
function clickNextButton() {
 for (var k = 0; k < questionset.length; ++k) {
    var s = questionset[i].style;
    s.display = s.display === 'none' ? 'block' : 'none';
    console.log('Hello.');
 }
}



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

function createLocalStorageofScoreNoScoreArray(){
  userAnswersStringified = JSON.stringify(userAnswers);
  localStorage.setItem('userAnswersStringified', userAnswersStringified);
  console.log(userAnswersStringified + ' is the stringified array.');
}


function grabYesAndNos(){
  for (var j = 0; j < reviewData.length; j++) {
    for (var f = 0; f < radioButtons.length, f++)
      if (reviewData[j] === 'score' && radioButtons[f].value === 'score') {
        radioButtons[f].checked = true;
      } else if (reviewData[j].value === 'no_score' && radioButtons[f].value === 'no_score') {
        radioButtons[f].checked = true;
    }
  }
}

'use strict';
//judy's JS code for accordion menu

var accordion = document.getElementsByClassName('accordion');

for (var i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('show');
  };
}


//judy's code for retaining user's answers in collapsed answer review in accordion menu
// 1.Use local storage as answers in array with yes and no's as strings
// 2. stringify to local storage
// 3. use JSON to parse Array
// 4. access array at their respective elements
// 5. after parse, match respective index with appropriate radio button


//need for loop to grab yes's and no's

var checked;
var yesAndNoArray = [];

function grabYesAndNos() {
  if (userAnswers[0] === 'no_score'){
    checked = 'yes';
  } else {
    checked = 'no';
  }

  yesAndNoArray.push(checked);
  console.log(yesAndNoArray);
}

grabYesAndNos();

// localStorage.setItem('userResultsForLocalStorage', JSON.stringify())

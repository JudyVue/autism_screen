'use strict';
//judy's JS code for accordion menu

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
function populateReviewPage(){
  reviewData = JSON.parse(localStorage.userAnswersStringified);
  console.log(reviewData);
}

populateReviewPage();

function pushNosIntoArray() {
  var no = document.getElementsByName('No');
  noArray = Array.prototype.slice.call(no);
}

function pushYesesIntoArray() {
  var yes = document.getElementsByName('Yes');
  yesArray = Array.prototype.slice.call(yes);
}


console.log(noArray);
console.log(yesArray);
pushYesesIntoArray();
pushNosIntoArray();

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

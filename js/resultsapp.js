'use strict';
var lowRisk = document.getElementById('low_risk');
var mediumRisk = document.getElementById('medium_risk');
var highRisk = document.getElementById('high_risk');
var data = JSON.parse(localStorage.loginArrayStringified);
var finalScore = document.getElementById('final_score');
var index = (data.length) - 1;
var score = data[index].score;


for (var i = 0; i < data.length; i++) {
  if (data[i].username === localStorage.session) {
    score = data[i].score;
  }
}


if (score < 3) {
  lowRisk.style.display = 'block';
}else if (score < 8){
  mediumRisk.style.display = 'block';
}else {
  highRisk.style.display = 'block';
}

finalScore.textContent = 'Your score is ' + score + ':';

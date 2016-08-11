'use strict';
var lowRisk = document.getElementById('low_risk');
var mediumRisk = document.getElementById('medium_risk');
var highRisk = document.getElementById('high_risk');
var data = JSON.parse(localStorage.loginArrayStringified);
var index = (data.length) - 1;
var finalScore = document.getElementById('final_score');

if (data[index].score < 3) {
  lowRisk.style.display = 'block';
}else if (data[index].score < 8){
  mediumRisk.style.display = 'block';
}else {
  highRisk.style.display = 'block';
}

finalScore.textContent = 'Your score is ' + data[index].score + ':';

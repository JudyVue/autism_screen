'use strict';
var lowRisk = document.getElementById('low_risk');
var mediumRisk = document.getElementById('medium_risk');
var highRisk = document.getElementById('high_risk');
var storedData = JSON.parse(localStorage.score);
var finalScore = document.getElementById('final_score');

if (storedData < 3) {
  lowRisk.style.display = 'block';
}else if (storedData < 8){
  mediumRisk.style.display = 'block';
}else {
  highRisk.style.display = 'block';
}

finalScore.textContent = 'Your score is ' + storedData + ':';

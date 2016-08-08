'use strict';

//Establishing Global Variables
var score = 0;
var questionArray = [];
var userAnswers = [];

//Creating Object Constructor Function
function QuestionCreator(name, answer){
  this.name = name;
  this.answer = answer;
  questionArray.push(this);
};

//Creating Object Instances
var questionOne = new QuestionCreator('Question 1', 'no');
var questionTwo = new QuestionCreator('Question 2', 'yes');
var questionThree = new QuestionCreator('Question 3', 'no');
var questionFour = new QuestionCreator('Question 4', 'no');

var questionFive = new QuestionCreator('Question 5', 'yes');
var questionSix = new QuestionCreator('Question 6', 'no');
var questionSeven = new QuestionCreator('Question 7', 'no');
var questionEight = new QuestionCreator('Question 8', 'no');

var questionNine = new QuestionCreator('Question 9', 'no');
var questionTen = new QuestionCreator('Question 10', 'no');
var questionEleven = new QuestionCreator('Question 11', 'no');
var questionTwelve = new QuestionCreator('Question 12', 'yes');

var questionThirteen = new QuestionCreator('Question 13', 'no');
var questionFourteen = new QuestionCreator('Question 14', 'no');
var questionFifteen = new QuestionCreator('Question 15', 'no');
var questionSixteen = new QuestionCreator('Question 16', 'no');

var questionSeventeen = new QuestionCreator('Question 17', 'no');
var questionEighteen = new QuestionCreator('Question 18', 'no');
var questionNineteen = new QuestionCreator('Question 19', 'no');
var questionTwenty = new QuestionCreator('Question 20', 'no');

//Running Function and Checking Array
QuestionCreator();
console.log(questionArray);


//Event Handler- to tally user score when Event Listener is triggered



//Event Listener- to capture user input 

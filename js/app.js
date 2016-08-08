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
var questionOne = new QuestionCreator('Question 1', 'yes');
var questionTwo = new QuestionCreator('Question 2', 'yes');
var questionThree = new QuestionCreator('Question 3', 'yes');
var questionFour = new QuestionCreator('Question 4', 'yes');
var questionFive = new QuestionCreator('Question 5', 'yes');
var questionSix = new QuestionCreator('Question 6', 'yes');
var questionSeven = new QuestionCreator('Question 7', 'yes');
var questionEight = new QuestionCreator('Question 8', 'yes');
var questionNine = new QuestionCreator('Question 9', 'yes');
var questionTen = new QuestionCreator('Question 10', 'yes');
var questionEleven = new QuestionCreator('Question 11', 'yes');
var questionTwelve = new QuestionCreator('Question 12', 'yes');
var questionThirteen = new QuestionCreator('Question 13', 'yes');
var questionFourteen = new QuestionCreator('Question 14', 'yes');
var questionFifteen = new QuestionCreator('Question 15', 'yes');
var questionSixteen = new QuestionCreator('Question 16', 'yes');
var questionSeventeen = new QuestionCreator('Question 17', 'yes');
var questionEighteen = new QuestionCreator('Question 18', 'yes');
var questionNineteen = new QuestionCreator('Question 19', 'yes');
var questionTwenty = new QuestionCreator('Question 20', 'yes');

//Running Function and Checking Array
QuestionCreator();
console.log(questionArray);

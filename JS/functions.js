var questions_answered = [];
var idQuestion = 0;
var corrrectAnswers = 0;
var questions = [
  {
    questionText: "How many legs does the Legs of Man have?",
    optionOne: "One",
    optionTwo: "Three",
    optionThree: "Four",
    correctAnswer: "Three",
  },
  {
    questionText: "How many tails does a Manx cat have?",
    optionOne: "None",
    optionTwo: "One",
    optionThree: "Two",
    correctAnswer: "None",
  },
  {
    questionText: "How many teeth does an aardvark have?",
    optionOne: "None",
    optionTwo: "Ten",
    optionThree: "Fifeteen",
    correctAnswer: "None",
  },
  {
    questionText: "Which sea creature has three hearts?",
    optionOne: "Shark",
    optionTwo: "Jellyfish",
    optionThree: "Octopus",
    correctAnswer: "Octopus",
  },
  {
    questionText: "Which instrument has forty-seven strings and seven pedals?",
    optionOne: "Drum",
    optionTwo: "Accordion",
    optionThree: "Harp",
    correctAnswer: "Harp",
  },
  {
    questionText: "Whose face was said to have launched 1,000 ships?",
    optionOne: "Helen of Troy",
    optionTwo: "Leonidas of Sparta",
    optionThree: "Cleopatra",
    correctAnswer: "Helen of Troy",
  },
  {
    questionText: "In the traditional rhyme, how many mice were blind?",
    optionOne: "Two",
    optionTwo: "Three",
    optionThree: "Five",
    correctAnswer: "Three",
  },
  {
    questionText: "How many bones does an adult human have?",
    optionOne: "Two hundred and six",
    optionTwo: "Two hundred",
    optionThree: "Two hundred and ten",
    correctAnswer: "Two hundred and six",
  },
  {
    questionText: "How many pedals do most modern pianos have?",
    optionOne: "None",
    optionTwo: "One",
    optionThree: "Three",
    correctAnswer: "Three",
  },
  {
    questionText: "Water boils at 212 degrees on which temperature scale?",
    optionOne: "Celsius",
    optionTwo: "Fahrenheit",
    optionThree: "Kelvin",
    correctAnswer: "Fahrenheit",
  },
];

function getNextQuestion() {
  var randomQuestionPosition = Math.floor(Math.random() * questions.length);
  document.getElementById("questionCounter").innerHTML =
    "Question number " + (questions_answered.length + 1);
  document.getElementById("questionText").innerHTML =
    questions[randomQuestionPosition].questionText;
  document.getElementById("answer1").innerHTML =
    questions[randomQuestionPosition].optionOne;
  document.getElementById("answer2").innerHTML =
    questions[randomQuestionPosition].optionTwo;
  document.getElementById("answer3").innerHTML =
    questions[randomQuestionPosition].optionThree;
  idQuestion = randomQuestionPosition;
}
function checkAnswer(userChoice) {
  var usChoice = "answer";
  if (userChoice === 1) {
    usChoice += "1";
  } else if (userChoice === 2) {
    usChoice += "2";
  } else {
    usChoice += "3";
  }
  if (
    document.getElementById(usChoice).innerHTML ===
    questions[idQuestion].correctAnswer
  ) {
    corrrectAnswers++;
    alert("Your answer was right!");
  } else {
    alert("Your answer was wrong!");
  }

  questions_answered.push(questions[idQuestion]);
  questions.splice(idQuestion, 1);
  if (questions.length === 0) {
    var btReload = document.createElement("button");
    document.getElementById("questionCounter").innerHTML =
      "Your final score is: " + corrrectAnswers;
    document.getElementById("divQuestion").remove();
    document.getElementById("mainDiv").appendChild(btReload);
    document.querySelector("button").innerHTML = "Play again";
    document
      .querySelector("button")
      .setAttribute("onclick", "location.reload()");
  } else {
    getNextQuestion();
  }
}

getNextQuestion();
//document.getElementById("questionText").innerHTML = "teste";

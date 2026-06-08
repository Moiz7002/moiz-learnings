let btns = document.querySelectorAll(".option-btn");
let scoreText = document.querySelector("#score");
let question = document.querySelector("#question");
let nextbtn = document.querySelector("#next-btn");
let quizBox = document.querySelector(".quiz-box");
let resultBox = document.querySelector(".result");
let restartBtn = document.querySelector("#restart-btn");

let questions = [
    {
        question : "Capital of India",
        options : ["Mumbai", "Delhi", "Ahmdabad", "Lucknow"],
        answer : "Delhi",
    },
    {
        question : "Who won the World Cup in 2022",
        options : ["France","Argentina","Brazil","Portugal"],
        answer : "Argentina",
    },
    {
        question : "Which of the following is prime number",
        options : ["15","9","73","25"],
        answer : "73",
    },
    {
        question : "Which of the following planet is known as a Red planet",
        options : ["Mars","Venus","Saturn","Jupiter"],
        answer : "Mars",
    },
    {
        question : "Which country has won the most Fifa title",
        options : ["France","Argentina","Brazil","Germany"],
        answer : "Brazil",
    },
];
let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    let currentQuiz = questions[currentQuestion];
       question.innerText = currentQuiz.question;
    btns.forEach(function(btn, index) {
        btn.innerText = currentQuiz.options[index];
        btn.disabled = false;
    });
}
displayQuestion();
function checkAnswer(optionSelected, answer){
      if(optionSelected === answer){
        score++;
    }
    console.log(score);
    btns.forEach(function(btn){
        btn.disabled = true;
    })
}
btns.forEach(function(btn){
    btn.addEventListener("click", function(){
           let selectedOption = btn.innerText;
        checkAnswer(selectedOption, questions[currentQuestion].answer);
    });
});

nextbtn.addEventListener("click", function(){
    if(currentQuestion < questions.length - 1){
        currentQuestion++;
          displayQuestion();
    } else {
        showResult();
    }
});

function showResult(){
      quizBox.classList.add("hide");
       resultBox.classList.remove("hide");
     scoreText.innerText = score;
}

restartBtn.addEventListener("click", function(){
     currentQuestion = 0;
    score = 0;
     resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
      displayQuestion();
});
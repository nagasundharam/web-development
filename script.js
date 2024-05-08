const questions = [
    {
        question :"Which is largest animal in the world?",
        answers : [
            {text :"Shark", correct : false },
            {text :"Blue Whale", correct : true  },
            {text :"Elephant", correct : false },
            {text :"Giraffe", correct : false }

        
        ]
    },
    {
        question :"Which is the smallest country in the world?",
        answers : [
            {text :"Vatican City", correct : true },
            {text :"Shark", correct : false },
            {text :"Shark", correct : false },
            {text :"Shark", correct : false }

        
        ]

    },
    {
    question :"Which is largest desert in the world?",
    answers : [
        {text :"Kalahari", correct : false },
        {text :"Gopi", correct : false },
        {text :"Sahara", correct : false },
        {text :"Antartica", correct : true }

    
    ]
},
{
    question :"Which is smallest continent  in the world?",
    answers : [
        {text :"Asia", correct : false },
        {text :"Australia", correct : true  },
        {text :"Arctic", correct : false  },
        {text :"Africa", correct : false},

    
    ]
},
    
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("nextBtn");


let currentQuestionIndex = 0 ;
let score = 0 ;

function startQuiz(){
    currentQuestionIndex = 0 ;
    score = 0 ;
    nextBtn.innerHtml = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach( answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
           
            button.dataset.correct = answer.correct
  

        }
        button.addEventListener('click',selectAnswer);

    })
}
 function resetState(){
    nextBtn.display = "none";

    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
 }

 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        

    }
    else {
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButton.children).forEach(button => {
          if (button.dataset.correct === "true"){
               button.classList.add("correct");
          }
          button.disabled = true;

    });
    nextBtn.style.display = "block";


 }

 function showScore(){
    
    resetState();
   

    questionElement.innerHTML = `You're Scored ${score}  out of ${questions.length}`;
    nextBtn.innerHTML = "play Again";
    nextBtn.display.style = "block";

 }
 function handleNextBtn(){
    if (currentQuestionIndex < (questions.length) - 1 ){
        currentQuestionIndex++;
        showQuestion();


 }
    else{
        
        showScore();

 }

 }
 nextBtn.addEventListener("click",function(){


    if (currentQuestionIndex < (questions.length ) ){

         handleNextBtn();
       


    }
    else if (currentQuestionIndex > (questions.length)){
        startQuiz();
        
    }
   
   
 });
   


startQuiz(); 
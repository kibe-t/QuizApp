const questions=[
    {
        question:"Which is the largest animal in the world",
        answers:[
            {text:"cow", correct:"false"},
            {text:"shark", correct:"false"},
            {text:"blue-whale", correct:"true"},
            {text:"elephant", correct:"false"},
        ]
    },
    {
        question:"Which is the biggest continent in the world",
        answers:[
            {text:"asia", correct:"true"},
            {text:"europe", correct:"false"},
            {text:"africa", correct:"false"},
            {text:"australia", correct:"false"},
        ]
    },
    {
        question:"Which is the most developed country in Africa",
        answers:[
            {text:"South Africa", correct:"true"},
            {text:"Tanzania", correct:"false"},
            {text:"Rwanda", correct:"false"},
            {text:"Egypt", correct:"false"},
        ]
    },
    {
        question:"Which is the smallest country in the world",
        answers:[
            {text:"kenya", correct:"false"},
            {text:"botswana", correct:"false"},
            {text:"jamaica", correct:"false"},
            {text:"vatican", correct:"true"},
        ]
    },
];

const questionElement=document.getElementById("question")
const answerbtns=document.getElementById("answerbtn")
const nextbutton=document.getElementById("nextbtn")

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + "." +currentQuestion.
    question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbtns.appendChild(button)
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click", selectanswer)
    })
}
function resetState(){
    nextbutton.style.display="none"
    while(answerbtns.firstChild){
        answerbtns.removeChild(answerbtns.firstChild)
    }
}

function selectanswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct== "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerbtns.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled= true
    });
    nextbutton.style.display ="block"


}
function showScore(){
    resetState();
    questionElement.innerHTML= `you scored ${score} out of ${questions.length}! `
    nextbutton.innerHTML= "play again"
    nextbutton.style.display= "block"
}
function handleNextButton(){
    currentQuestionIndex ++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}
nextbutton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }
    else{
        startQuiz
    }
} )
startQuiz();
const questions=[
    {
        question : "Which is the largest animal in the world.. ?",
        answers:[
            {text:"shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},

        ]
    },
      {
    question: "Why do programmers prefer dark mode? 😎",
    answers: [
        {text: "Because light attracts bugs", correct: true},
        {text: "Because it saves battery", correct: false},
        {text: "Because it looks cool", correct: false},
        {text: "No reason", correct: false}
    ]
},
{
    question: "What is a programmer’s favorite place? 😂",
    answers: [
        {text: "Beach", correct: false},
        {text: "Stack Overflow", correct: true},
        {text: "Park", correct: false},
        {text: "Mall", correct: false}
    ]
},
{
    question: "Why did the programmer quit his job? 😅",
    answers: [
        {text: "Too much work", correct: false},
        {text: "He didn’t get arrays", correct: true},
        {text: "He was tired", correct: false},
        {text: "No salary", correct: false}
    ]
},
{
    question: "What does HTML stand for? 🤔",
    answers: [
        {text: "Hyper Text Markup Language", correct: true},
        {text: "High Tech Modern Language", correct: false},
        {text: "Hyperlinks and Text Language", correct: false},
        {text: "Home Tool Markup Language", correct: false}
    ]
},
{
    question: "What is the most used language in programming? 😄",
    answers: [
        {text: "JavaScript", correct: false},
        {text: "Python", correct: false},
        {text: "English", correct: true},
        {text: "Java", correct: false}
    ]
},
{
    question: "Why do Java developers wear glasses? 🤓",
    answers: [
        {text: "Because of screen time", correct: false},
        {text: "Because they can't C#", correct: true},
        {text: "Because they love coding", correct: false},
        {text: "Because of bugs", correct: false}
    ]
}
];

const questionElement=document.getElementById("question");
const answerBtns=document.getElementById("answer-buttons");
const nextBtn=document.getElementById("next-btn");




let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion();


}



function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

answerBtns.innerHTML="";

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}



function resetState(){
    nextBtn.style.display="none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct==="true";

    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBtn.style.display="block";
}


function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length} !`;
    nextBtn.innerHTML="play Again";
    nextBtn.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click",function(){
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();





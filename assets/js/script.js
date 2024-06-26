const questions = [
    {
        question: "Which Pokémon has the highest base Speed stat?",
        answers: [
            { text: "Jolteon", correct: false },
            { text: "Electrode", correct: false },
            { text: "Ninjask", correct: false },
            { text: "Deoxys-Speed", correct: true },
        ]
    },
    {
        question: "Which Pokémon can learn the move Dragon Ascent through an event or special means?",
        answers: [
            { text: "Rayquaza", correct: true },
            { text: "Gyarados", correct: false },
            { text: "Dragonite", correct: false },
            { text: "Salamence", correct: false },
        ]
    },
    {
        question: "Which of these Pokémon does NOT have a Mega Evolution form?",
        answers: [
            { text: "Gengar", correct: false },
            { text: "Alakasam", correct: false },
            { text: "Arcanine", correct: true },
            { text: "Pinsir", correct: false },
        ]
    },
    {
        question: "Which Ability prevents a Pokémon from being affected by moves that force switching out",
        answers: [
            { text: "Sturdy", correct: false },
            { text: "Suction Cups", correct: false },
            { text: "Shadow Tag", correct: true },
            { text: "Telepathy", correct: false },
        ]
    },
    {
        question: "Which of these Pokémon has the highest base Special Defense stat?",
        answers: [
            { text: "Blissey", correct: false },
            { text: "Shuckle", correct: true },
            { text: "Lugia", correct: false },
            { text: "Umbreon", correct: false },
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again?';
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
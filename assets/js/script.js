
//Questions for the quiz//
var questionNumber=0;
//question 1//
const questions = [
{
question: 'Which Pokemon has the highest speed stat?',
answers:[
    {text:"Jolteon", correct: false},
    {text:"Electrode", correct: false},
    {text:"Ninjask", correct: false},
    {text:"Deoxsys-Speed", correct: true},
]
},


//Question 2//
{
    question: 'Which of the following Pokemon is known as the "Electric Mouse"?',
    answers:[
        {text:"Charmander", correct: false},
        {text:"Bulbasaur", correct: false},
        {text:"Pikachu", correct: true},
        {text:"Squirtle", correct: false},
    ]
    },
//Question3//
{
    question: 'Which of these Pokémon is known for its ability to learn and transform into any other Pokémon using the move Transform?',
    answers:[
        {text:"Ditto", correct: true},
        {text:"Mew", correct: false},
        {text:"Porygon", correct: false},
        {text:"Zoroark", correct: false},
    ]
    },
//Question4//
{
    question: 'Which of these Pokémon has a unique type combination that no other Pokémon had at the time of its introduction?',
    answers:[
        {text:"Giratina", correct: false},
        {text:"Aegislash", correct: false},
        {text:"Darkrai", correct: false},
        {text:"Volcanion", correct: true},
    ]
    },
];

//All Declared Variables//
const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btns")

const setQuestion = ()=> {
//set question text//
var question=questions[0]
document.getElementById("question").innerText=question.question

//set answer text//
document.getElementById("answer1").innerText=question.answers[0].text
document.getElementById("answer2").innerText=question.answers[1].text
document.getElementById("answer3").innerText=question.answers[2].text
document.getElementById("answer4").innerText=question.answers[3].text
//add evetn listeners//
}

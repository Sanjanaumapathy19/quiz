var questionBank=[
    {
        question :'Among the following, which planet falls under the category of the coldest planet in the solar system?',
        option: ['Uranus','Neptune',' Mercury','Mars'],
        answer : 'Uranus'
    },
    {
        question :' ________ is the instrument, which helps in measuring the magnitude of an earthquake? ',
        option : ['Mercalli scale',' Seismograph','Richter scale','None of the above'],
        answer : 'Richter scale'
    },
    {
        question :'Which vitamin helps in the formation of nucleic acids and red blood cells? ',
        option : ['Vitamin B6',' Vitamin B3','Vitamin B10','Vitamin B5'],
        answer : 'Vitamin B10'
    },
    {
        question :'Which of the following chemical is used in killing rats?',
        option : [' Magnesium Sulphate','Calcium Carbonate','Zinc phosphide','Potassium Aluminium Sulphate'],
        answer : 'Zinc phosphide'
    },
    {
        question :'Who invented the Quantum Theory of Radiation?',
        option : ['Neil Bohr','Planck',' Rutherford',' J J Thomson'],
        answer : 'Planck'
    },
   
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var prev= document.querySelector('.previous');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background='red';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}
// Function to display previous question
function previousQuestion() {
    if (i > 0) {
        i = i - 1;
        displayQuestion();
    }
}

// Click events for next and previous buttons
next.addEventListener('click', nextQuestion);
prev.addEventListener('click', previousQuestion);


//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
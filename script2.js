//variables
//html section
var intro = document.getElementById("introduction");
var quiz = document.getElementById("qu");
var highScores = document.getElementById("hs");
var startButton = document.getElementById("Start");
var scoreCounter = 0;
var textInfo = document.getElementById("pOne");
var newH = document.getElementById("newHeader");
var body = document.body;

//JS Section
var timerEl = document.getElementById("timerIndicator");
/*var ansBtn1 = document.getElementById("ans1");
var ansBtn2 = document.getElementById("ans2");
var ansBtn3 = document.getElementById("ans3");
var ansBtn4 = document.getElementById("ans4");*/




//Function
    function startGame(){
        countdown();
        question();
        solution();
    }


 //Timer
 function countdown() {
    var timeLeft = 500;
    quiz.setAttribute('hidden',false);
    intro.setAttribute('hidden',true);
    var timeInterval = setInterval(function () {
        if (timeLeft > 0 ) {
           timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else if(timeLeft === 0){
            timerEl.textContent = 'Time: ' + timeLeft;
           clearInterval(timeLeft);
           location.replace("highscores.html");
            alert('we are done');
            
        }
   }, 1000);
 }
 function question (){
    intro.setAttribute("hidden",true);
    startButton.setAttribute("hidden",true);
    newH.setAttribute('hidden',true);
    textInfo.setAttribute("hidden",true);
    
    
    
 for(let i=0; i<quizObject.length; i++) {
   let question = quizObject[i].Question;
    let ansBtna = quizObject[i].answer1;
    let ansBtnb = quizObject[i].answer2;
    let ansBtnc = quizObject[i].answer3;
    let ansBtnd = quizObject[i].answer4;

    var ques = document.createElement('h2');
    ques.setAttribute('style', 'margin:auto; width:50%; text-align:center; padding-top:30px');
    ques.textContent = question;
    body.appendChild(ques);
    
    var btn1 = document.createElement('button');
    btn1.setAttribute('style', 'margin-left:12.5%; width:10%; text-align:center;  margin-top: 20px; ');
    btn1.textContent = ansBtna;
    body.appendChild(btn1);

    var btn2 = document.createElement('button');
    btn2.setAttribute('style', 'margin-left:12.5%; width:10%; text-align:center;  margin-top: 20px; ');
    btn2.textContent = ansBtnb;
    body.appendChild(btn2);

    var btn3 = document.createElement('button');
    btn3.setAttribute('style', 'margin-left:12.5%; width:10%; text-align:center; margin-top: 20px; ');
    btn3.textContent = ansBtnc;
    body.appendChild(btn3);

    var btn4 = document.createElement('button');
    btn4.setAttribute('style', 'margin-left:12.5%; width:10%; text-align:center;  margin-top: 20px;');
    btn4.textContent = ansBtnd;
    body.appendChild(btn4);
 }

 }
function solution(){
    if(quizObject[0].answer2 == true)
    alert("correct");
    else(quizObject[0].answer1||quizObject[0].answer0||quizObject[0].answer3)
    alert('wrong');
    timeLeft-=10;
}



//quiz
var quizObject = [
    {
            Question: "How many hours did it take to complete this quiz:",
            answer1: '10 hr', 
            answer2: '15 hr', 
            answer3: '22 hr', 
            answer4: '25 hr' 
        
    },
    {       Question: "What weighs more:",
            answer1: 'Baby Elephant', 
            answer2: 'Blue Whale Tongue', 
            answer3: 'Asian Elephant',
            answer4: 'Rhino'
    },
    {
            Question: "What is a boolean:",
            answer1: 'Color', 
            answer2: 'Number', 
            answer3: 'Letters & Numbers', 
            answer4: 'True or False' 
            
    },
    {
            Question: "What do you need to become a Fullstack Developer:",
            answer1: 'Patience',
            answer2: 'Perseverance', 
            answer3: 'Hard Work',
            answer4: 'All of the Above'
            
        
    }

]


 startButton.addEventListener('click',startGame)




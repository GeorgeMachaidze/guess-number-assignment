let guess = document.getElementById("guess");
let checkButton = document.getElementById("checkButton");
let tryButton = document.getElementById("try");
let randomInteger = Math.floor(Math.random() * 100);
let number = document.querySelector(".number");
let p = document.querySelector(".message");
let pScore = document.querySelector(".score");
let pHighScore = document.querySelector(".highscore");
let score = 0;
let highscore = 100;


function tryAgain(){
    score = 0;
    pScore.innerHTML = "0"
    randomInteger = Math.floor(Math.random() * 100);
    document.body.style.backgroundColor = "#222";
    number.innerHTML = "?";
    p.innerHTML = "Start guessing..."
}
function checkUserInput(){
    if(guess.value > 100 || guess.value < 1){
        alert("Please chose number between 1 and 100")
    }
}
function checkInputHightOrLow(){
    if(guess.value > randomInteger){
        score++;
        p.innerHTML = " 📈 To High!"
        pScore.innerHTML = score;
    }if(guess.value < randomInteger){
        score++;
        p.innerHTML = " 📉 To Low!"
        pScore.innerHTML = score;
    }if(guess.value == randomInteger){
        score++;
        pScore.innerHTML = score;
        p.innerHTML = " 🎉 Correct number!"
        document.body.style.backgroundColor = "#60b347";
        checkHighScore();
        number.innerHTML = randomInteger;
    }
}
function checkHighScore(){
    if(score < highscore){
        highscore = score;
        pHighScore.innerHTML = score;
    }
}

checkButton.addEventListener("click", function(){
    checkUserInput();
    checkInputHightOrLow();
})
tryButton.addEventListener("click", function(){
    tryAgain();
    
})

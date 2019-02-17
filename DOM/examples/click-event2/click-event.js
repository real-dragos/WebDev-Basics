const p1Label = document.querySelector("#player1-score-label");
const p2Label = document.querySelector("#player2-score-label");
const finalScoreLabel = document.querySelector('#finalscore-label');
const finalScoreInput = document.querySelector('#finalscore-input');

const p1Button = document.querySelector('#player1-btn');
const p2Button = document.querySelector('#player2-btn');
const resetButton = document.querySelector('#reset-btn');

let winner;
let finalScore = 5;
let p2Score = 0;
let p1Score = 0;

function main(){
    updateScore();
    finalScoreLabel.textContent = finalScore.toString();
    finalScoreInput.value = finalScore;

    finalScoreInput.addEventListener("input",()=>{
        if(p1Score >0 || p2Score > 0){
            finalScoreInput.disabled = "true";
            finalScoreInput.value = finalScore;
            return;
        }

        finalScore = Number(finalScoreInput.value);

        if(finalScore < 1){
            finalScore = 1;
            finalScoreInput.value = finalScore;
        }
        finalScoreLabel.textContent = finalScore.toString();
    })

    p1Button.addEventListener("click",()=>{
        p1Score++;
        checkWinner();
    });

    p2Button.addEventListener("click",()=>{
        p2Score++;
        checkWinner();
    });

    resetButton.addEventListener("click",resetGame);
}

function showWinner(){
    alert("The winner is: " + winner + "!");
}

function resetGame(){
    p1Score = 0;
    p2Score = 0;
    winner = undefined;
    p1Label.classList.remove("winner");
    p2Label.classList.remove("winner");
    updateScore();
}

function checkWinner(){
    if(winner){
        return;
    }

    if(p1Score === finalScore){
        winner = "player1";
        p1Label.classList.add("winner");
        showWinner();
    }
    if(p2Score === finalScore){
        winner = "player2";
        p2Label.classList.add("winner");
        showWinner();
    }
    updateScore();
}

function updateScore(){
    p1Label.textContent = p1Score.toString();
    p2Label.textContent = p2Score.toString();
}

main();
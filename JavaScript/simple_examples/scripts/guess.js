const upperLimit = 30;
const lowerLimit = 1;

function generateNumber(lowerLimit, upperLimit) {
    return Math.floor(Math.random() * (upperLimit - lowerLimit)) + lowerLimit;
}

function main() {
    let secretNumber = generateNumber(lowerLimit, upperLimit);
    console.log(secretNumber);

    let guessedNumber = false;
    let guess;
    while (!guessedNumber) {
        guess = prompt("Guess a number between " + lowerLimit + " and " + upperLimit);

        if (Number(guess) === secretNumber) {
            alert("Congrats! You guessed it!");
            guessedNumber = true;
        }else if(Number(guess) < secretNumber){
            alert("Too low! Try Again!")
        }else if(Number(guess) > secretNumber){
            alert("Too high! Try Again!")
        }else{
            alert("Invalid value!")
        }

    }

    console.log("The game ended!")
}

main();
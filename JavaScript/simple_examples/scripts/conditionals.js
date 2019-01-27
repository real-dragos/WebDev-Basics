

function checkAge(){
    var age = Number.parseInt(prompt("What is your age?"))

    if(age < 0){
        console.log("Error: Age can't be negative")
    }else if(age === 21){
        console.log("Happy 21st birthday!!")
    }else if(age%2 === 1){
        console.log("your age is odd!")
    }else if(isPerfectSquare(age)){
        console.log("perfect square!")
    }
}

function isPerfectSquare(num){
    let squareRoot = Math.sqrt(num)
    return (squareRoot - Math.floor(squareRoot) === 0)
}

checkAge()
function isEven(num) {
    if (typeof num === "number") {
        return num % 2 == 0;
    }
}

function factorial(num){
    if(num < 0 || typeof num !== "number"){
        return;
    }else if(num === 0){
        return 1;
    }else{
        let fact = 1;
        for(let i = 1; i<=num;i++){
            fact*=i;
        }
        return fact;
    }
}

function kebabToSnake(str){
    if(typeof str !== "string"){
        return;
    }
    let newString = str.replace(/-/g,"_");
    // for(let i=0;i<str.length;i++){
    //     if(newString[i] === "-"){
    //         newString = newString.slice(0,i) + "_" + newString.slice(i+1)
    //     }
    // }
    return newString;
}

console.log(kebabToSnake("Let's-go-home"))
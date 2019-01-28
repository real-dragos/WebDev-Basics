function isEmpty(array){
    if(Array.isArray(array)){
        return array.length === 0;
    }
    return false;
}


function reverseArray(array){
    if(isEmpty(array)){
        return;
    }
    let reverseArray = []
    for(let i = array.length-1;i>=0;i--){
        reverseArray.push(array[i]);
    }
    return reverseArray;
}

function isUniform(array){
    if(isEmpty(array)){
        return;
    }
    const firstElement = array[0];
    for(let i=0;i<array.length;i++){
        if(array[i] !== firstElement){
            return false;
        }
    }
    return true;
}

function sumArray(array){
    if(isEmpty(array)){
        return;
    }
    let sum = 0;
    array.forEach(function(item){
        if(typeof item === "number"){
            sum+=item;
        }
    })
    return sum;
}

function findMaximum(array){
    if(isEmpty(array)){
        return;
    }
    let max = array[0];
    array.forEach(function(item){
        if(typeof item === "number" && item > max){
            max = item;
        }
    });
    return max;
}

function myForEach(arr, func){
    for(let i=0;i<arr.length;i++){
        func(arr[i])
    }
}

Array.prototype._myForEach = function(func) {
    for(let i=0;i<this.length;i++){
        func(this[i])
    }
}


//Own forEach method

console.log(reverseArray(123))
console.log(reverseArray([1,2,3]))
console.log(isUniform([1,1,1,1]))
console.log(isUniform([1,1,2,1]))
console.log(sumArray([1,2,3,"a",4]))
console.log(findMaximum([1,100,3,"a",4]))
myForEach(["red", "yellow", "orange"], function(color){
    console.log(color);
});

const friends = ["Alex", "Caitlin","Mark"]

friends._myForEach(function(name){
    console.log("I love " + name);
})
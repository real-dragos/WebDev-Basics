console.log("Print all numbers between -10 and 19");
let num = -10;
while (num <= 19) {
    console.log(num);
    num++;
}
console.log("Print all numbers between -10 and 19");
for (let i = -10; i <= 19; i++) {
    console.log(i);
}
console.log("Print all even numbers between 10 and 40");
num = 10;
while (num <= 40) {
    console.log(num);
    num += 2;
}
console.log("Print all even numbers between 10 and 40");
for (let i = 10; i <= 40; i += 2) {
    console.log(i);
}
console.log("Print all odd numbers between 300 and 333");
num = 301;
while (num <= 333) {
    console.log(num);
    num += 2;
}
console.log("Print all odd numbers between 300 and 333");
for (let i = 301; i <= 333; i += 2) {
    console.log(i);
}
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
num = 5;
while (num <= 50) {
    if (num % 5 === 0 && num % 3 === 0) {
        console.log(num);
    }
    num++;
}
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for (let i = 5; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
    console.log(i);
}

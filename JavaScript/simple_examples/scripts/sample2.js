let age = Number.parseInt(prompt("How old are you?"))
let leapYears = age % 4;
const days = age * 365 + leapYears;

alert(age + " years is roughly " + days + " days")
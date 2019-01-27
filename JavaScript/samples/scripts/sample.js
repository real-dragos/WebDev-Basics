let firstName = prompt("What is your first name?")
let lastName = prompt("What is your last name?")
let age = prompt("How old are you?")

console.log("Your full name is " + firstName + " " + lastName)
if(age<0){
    console.log("You are just a baby")
}else if(age == 1){
    console.log("You are one year old")
}else{
    console.log("You are " + age + " years old")
}
const userloggedin = true
const temperature = 30;
if(temperature===30){
    console.log("It's a hot day");
}
else{
    console.log("It's a nice day");
}
console.log("This is an if statement");
const score=200
if(score>100){
    const power="fly"
    console.log(`user power :${power}`);
}
// console.log(`user power :${power}`);
const balance=1000
// if(balance>500)console.log("You are rich"),
// console.log("This is a if statement without curly braces");not write the code in this type;
if(balance<500){
    console.log("less then 500");
}else if(balance<750){
    console.log("less then 750");
}else if(balance<900){
    console.log("less then 900");
}else{
    console.log("less then 1200");
}
const userloggedin1 = true
const debitcard = true
const userloginfromgoogle= false
const userloginfromemail= true
if(userloggedin1 && debitcard){
    console.log("You can buy course");
}
if(userloginfromgoogle || userloginfromemail){
    console.log("You can login");
}
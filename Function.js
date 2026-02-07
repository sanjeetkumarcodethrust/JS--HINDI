function SaymyName(){
    console.log("My name is John snow");
}
// SaymyName();
// function AddTwoNumber(number1,number2,number3){
    // console.log(number1+number2,number3);
// }
// AddTwoNumber("6",5,2);
function addtwonumber(number1,number2){
    // let result=number1+number2;
    // return result;
    return number1+number2;
    // console.log("This will not execute"); note: this will not execute because return statement is used before it. 
    // once return is executed the function will be exited and no code after return will be executed.
}
const result=addtwonumber(5,6);
// console.log(result);
function Usserloginusermessage(username){
    if(username===undefined){
        console.log("Please provide a username");
        return;
    }
    return  `${username} just login in`
}
// console.log(Usserloginusermessage("Sanjeet Kumar"));
// console.log(Usserloginusermessage());
function calculatecardprice(val1,val2,...num1){
    return num1;
}
// console.log(calculatecardprice(1999,199,202,987));
const user ={
    name:"Sanjeet Kumar",
    age:24,
    email:"sanjeetkumar@example.com",
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age} and email is ${anyobject.email}`);
}
// handleobject(user);
handleobject({
    name:"Bittu Kumar",
    age:19,
    email:"sanjeetkumar960@example.com",
})


const myNewArray=[1,2,3,4,5];
function returnsecondevalue(getarray){
    return getarray[1];
}
console.log(returnsecondevalue(myNewArray));
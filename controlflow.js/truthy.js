const userEmail="sanjeetkum960@gmail.con"
if(userEmail){
    console.log("got your email");
}else{
    console.log("cont have your emailn");
}
// falsy values in js 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values in js
// "0", " ", [], {}, function(){}, true, 1, -1, 3.14, Infinity, -Infinity
if(userEmail.length===0){
    console.log("Array is empty");
}
const emptyobject = {}
if(Object.keys(emptyobject).length === 0){
    console.log("This is an empty object");
}
// nullish coalescing operator(??):null or undefined
let val1;
// val1=5??10
// val1=null??10
// val1=undefined??10
// val1=null??undefined??10
val1=null??19??10


console.log(val1);
// terniary operator
// condition ? true : false
const age=19
const canvote=age>=18 ? "can vote" : "cannot vote"
console.log(canvote);
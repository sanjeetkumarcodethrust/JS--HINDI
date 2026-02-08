let a=10
const b=20


if(true){
    let a=100
    const b=200
    // console.log("I`m inside the block" ,a);
}

for(let i=0;i<Array.length;i++){
    let element=Array[i]
    // console.log(element);
}
// console.log(a);
// console.log(b);
// console.log(c);
function one(){
    const username="Sanjeet Kumar"
    function two(){
        const website="youtube.com"
        console.log(username);
    }
    // console.log(website);
     // this will give an error because website is not defined in this scope.
     //  it is defined in the inner function two() and it is not accessible in the outer function one().
     two();
}
// one();
if(true){
    const username="Sanjeet Kumar"
    if(username==="Sanjeet Kumar"){
        const website=" youtube.com"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);
console.log(addone(6));
function addone(value){
    return value+1;
}
// console.log(addone(6));
console.log(addtwo(8));
const addtwo=function(value){
    return value+2;
}
// console.log(addtwo(8));
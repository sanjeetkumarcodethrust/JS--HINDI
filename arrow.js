const user={
    username:"Sanjeet Kumar",
    price:1000,
    welcomemessage: function(){
        console.log(` ${this.username},welcome to the world of javascript`);
        console.log(this);
    }
}
// user.welcomemessage();
// user.username="bittu Kumar";
// user.welcomemessage();
// console.log(this);

// const chai=function(){
//     let username="Sanjeet Kumar";
//     console.log(this.username);

// }

const chai = ()=>{
    let username="Sanjeet Kumar";
    console.log(this.username);

}


// chai();
// const addtwo=(num1,num2)=>{
    // return num1+num2;
// }

// const addtwo=(num1,num2)=> num1+num2;
// const addtwo=(num1,num2)=> (num1+num2)
const addtwo=(num1,num2)=> ({username:"Sanjeet Kumar"})

console.log(addtwo(2,3));
// const myarray=[1,2,3,4,5];
// myarray.forEach(function())
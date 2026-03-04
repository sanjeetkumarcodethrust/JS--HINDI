function Setusername(username){
    this.username = username;
    console.log("called");
}
function createuser(username,email,password){
    Setusername.call(this,username);
    this.email = email;
    this.password = password;
}
const chai=new createuser("chai","chai@gmail.com","123456");
console.log(chai);
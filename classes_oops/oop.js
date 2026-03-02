const user={
    username:"Sanjeet",
    email:"sanjeetkum960@gmail.com",
    loginedid:true,
    getUserdetails:function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}, Email: ${this.email}`);
        console.log(this);
    }
}
// console.log(user.loginedid);
// console.log(user.getUserdetails());
// console.log(this);
function User(username,logincount,loginedid){
    this.username=username;
    this.logincount=logincount;
    this.loginedid=loginedid;
    this.greeting=function(){
        console.log(`Hello ${this.username}, welcome back!`);
    }
    return this
}
const user1=new User("Sanjeet",5,true);
const user2=new User("John",3,false);
console.log(user1);
console.log(user2);
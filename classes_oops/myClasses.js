// ES6
// class User {
//     constructor(username, email,password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword() {
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }
// const sanjeet=new User("sanjeet","sanjeet@example.com","123");
// // console.log(sanjeet.encryptPassword()); // Output: sanjeet
// console.log(sanjeet.changeUsername()); // Output: SANJEET
// behind the scenes,
function User(username, email,password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}
User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`;
}
const Bittu=new User("Bittu","bittu@example.com","456");
console.log(Bittu.encryptPassword()); // Output: 456abc
console.log(Bittu.changeUsername()); 
// console.log(Bittu.encryptPassword()); // Output: 456abc

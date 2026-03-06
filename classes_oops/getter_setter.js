class User{
    constructor(email,password) {
        this.email= email;
        this.password= password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(newEmail){
        this._email= newEmail;
    }
    get password(){
        return `${this._password}sanjeet`;
    }
    set password(newPassword){
        this._password= newPassword.toUpperCase();
    }
}
const sanjeet=new User("sanjeet@example.com", "abs");
console.log(sanjeet.email); // Output:
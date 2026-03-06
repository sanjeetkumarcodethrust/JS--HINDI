const User={
    _email:"sanjeet@example.com",
    _password:"abs",
    get email(){
        return this._email.toUpperCase();
    },
    set email(newEmail){
        this._email= newEmail;
    },
    get password(){
        return `${this._password}sanjeet`;
    },
    set password(newPassword){
        this._password= newPassword;
    }
};
const sanjeet=Object.create(User);
console.log(sanjeet.email); // Output:
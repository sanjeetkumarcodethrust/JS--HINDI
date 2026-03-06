function User(email,password) {
    this._email= email;
    this._password= password;
    Object.defineProperty(this, "email", {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(newEmail) {
            this._email= newEmail;
        }
    });
    Object.defineProperty(this, "password", {
        get: function() {
            return `${this._password}sanjeet`;
        },
        set: function(newPassword) {
            this._password= newPassword;
        }
    });
}
const sanjeet=new User("sanjeet@example.com", "abs");
console.log(sanjeet.email); // Output: SANJEET@EXAMPLE.COM
// console.log(sanjeet.password); // Output: abssanjeet
class User{
    constructor(username) {
        this.username = username;

    }
    logme(){
        console.log(`USERNAME: ${this.username}`);
    }
}
class teacher extends User{
    constructor(username,email,password) {
        super(username);
        this.email=email;
        this.password=password;
    }
    addcourse(){
        console.log(` A new course was added by: ${this.username}`);
    }
}
const sanjeet=new  teacher("sanjeet","sanjeet@example.com","123");

sanjeet.logme();
const bittu=new User("bittu")
bittu.logme()
console.log(sanjeet instanceof User);
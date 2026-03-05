class User{
    constructor(username) {
        this.username = username;
    }
    logme(){
        console.log(`USERNAME: ${this.username}`);
    }
    static createId(){
        return `123`;
    }
}
const sanjeet=new User("sanjeet");
// console.log(sanjeet.createId());
class teacher extends User{
    constructor(username,email) {
        super(username);
        this.email=email;
        
    }
}

const iphone=new teacher("iphone","i@phone.gmail.com")
console.log(iphone.createId());
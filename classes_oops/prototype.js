// let myName="Sanjeet Kumar     "
// let yourName="Sanjeet Kumar"
// // console.log(myName.trim().length);
// console.log(myName.length);
let myHeros=["Ironman","Spiderman","Thor"];
let herospower={
    Ironman:"Money",
    Spiderman:"Agility",
    Thor:"Thunder",
    getSpiderPower:function(){
        console.log( `Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.sanjeet=function(){
    console.log(`Sanjeet present in all objects`);
}
Array.prototype.heysanjeet=function(){
    console.log(`Sanjeet say hello`);
}


// herospower.sanjeet();
myHeros.sanjeet();
myHeros.heysanjeet();
// herospower.heysanjeet();
// inheritance 

const user={
    name:"Sanjeet Kumar",
    email:"sanjeetlum878@gmail.com",
}
const teacher={
    makevideo:true
}
const teachingsupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:"js assignment",
    fullTime:true,
    __proto_:teachingsupport
}
teacher.__proto__=user; 
// modern syntax
Object.setPrototypeOf(teachingsupport,teacher);
const User2="Sanjeet Kumar"     ;
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
User2.trueLength();
"hitesh".trueLength()
"iceTea".trueLength()


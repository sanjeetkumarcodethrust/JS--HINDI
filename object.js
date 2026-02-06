// const tinderUser =new Object();
const tinderUser={};
tinderUser.id="123abc";
tinderUser.name="Sanjeet";
tinderUser.isLoggedIn=false;
// console.log(tinderUser);
const regularUser={
    email:"sanjeetkum960@gmail.com",
    fullname :{
        userFullname:{
            firstName:"Sanjeet",
            lastName:"Kumar"
        }
    }
}
// console.log(regularUser.fullname);
const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"d",4:"e",6:"f"};
// const obj3={obj1,obj2};
const obj3=Object.assign({},obj1,obj2);
const obj4={...obj1,...obj2};
// console.log(obj3);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));
const course={
    coursename:"js hindi",
    price:"990",
    courseInstructor:"Sanjeet Kumar",
}
// course.courseInstructor;
const {courseInstructor:instructor}=course;
// console.log(courseInstructor);
console.log(instructor);
// console.log(course.coursename);
// console.log(course["price"]);
// for of//
// [" "," ","",]
// [{},{},{}]
const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}
const greeting="Hello World";
for (const greet of greeting) {
    // console.log(greet);
}
// Map
const map =new Map();
map.set("name","sanjeet");
map.set("age",24);
map.set("city","patna");
// map.set("name","sanjeet");map is used only unique keys
// console.log(map);
for (const [key,value] of map) {
    // console.log(key, value);
}
// const myobject={
    // name:"sanjeet",
    // age:24,
    // city:"patna"
// }
// for (const [key,value] of myobject) {
    // console.log(key, value);
// }Object is not iterable in for of loop
const myobject={
    name:"sanjeet",
    age:24,
    city:"patna"
}
for (const key in myobject) {
    // console.log(myobject[key]);
    // console.log(key, myobject[key]);
    // console.log(`${key}: ${myobject[key]}`);
}
const myarray=["thor", "ironman", "hulk", "captain america", "black widow"]
for (const index in myarray) {
    // console.log(`index: ${index} and element: ${myarray[index]}`);
}
// const map=new Map()
// map.set("name","sanjeet");
// map.set("age",24);
// map.set("city","patna");
// for (const key in map) {
//     console.log(key);
    
// }map is not iterable in for in loop
const coding=["javascript", "python", "java", "c++"]
coding.forEach(function(element,index){
    // console.log(`index: ${index} and element: ${element}`);
})
coding.forEach( (value)=>{
    console.log(value);
})
function printMe(value){
    console.log(value);
}
coding.forEach(printMe);
coding.forEach( (value,index,arr)=>{
    console.log(`index: ${index} and element: ${value}and array: ${arr}`);
})
const mycoding=[
    {
        name:"javascript",
        type:"frontend"
    },
    {
        name:"python",
        type:"backend"
    },
    {
        name:"java",
        type:"backend"
    },
{
    name:"c++",
    type:"system programming"
}   ,
]
mycoding.forEach(  (item)=>{
    // console.log(`name: ${item.name} and type: ${item.type}`);
    console.log(item.name);
})
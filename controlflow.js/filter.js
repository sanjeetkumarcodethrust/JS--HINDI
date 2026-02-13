// const mycoding=["javascript", "python", "java", "c++"]
// const value=mycoding.forEach( (item)=>{
    // console.log(item);
    // return item;
// })
// console.log(value); // forEach does not return anything it returns undefined.
const mynums=[1,2,3,4,5,8,9,6,90,87,5,2,3,4,5,6,7,8,9]
// const newnums=mynums.filter( (num)=>num>5)
const newnums=mynums.filter( (num)=>{
    if(num>5){
        return true;
}
})
// console.log(newnums);
// if we use scope then write return ;
const newnums2=[1,2,3,4,5,8,9,6,90,87,5,2,3,4,5,6,7,8,9]
newnums2.forEach( (num)=>{
    if(num>5){
        newnums2.push(num);
    }
})
// console.log(newnums2);
const books = [
  {
    id: 1,
    name: "History of India",
    published: 2015,
    edition: "2nd",
    type: "History",
    genre: "Non-Fiction"
  },
  {
    id: 2,
    name: "Basic Science",
    published: 2018,
    edition: "3rd",
    type: "Science",
    genre: "Educational"
  },
  {
    id: 3,
    name: "English Grammar",
    published: 2020,
    edition: "1st",
    type: "English",
    genre: "Language"
  }
];
const newbooks=books.filter( (book)=>book.published>2016)
// console.log(newbooks);
const newnumbers=[1,2,3,4,5,8,9,6,90,87,5,2,3,4,5,6,7,8,9]
// const newnum=newnumbers.map( (num)=>num+10)
const newnum=newnumbers
                  .map( (num)=>num*10) 
                  .map( (num)=>num+10)   
                  .filter( (num)=>num>50)
// console.log(newnum);
const numbers=[1,2,3]
// const total=numbers.reduce( (accumulator,currentvalue)=>{
//     console.log(`accumulator: ${accumulator} and currentvalue: ${currentvalue}`);
//     return accumulator+currentvalue;
// },3)
const total=numbers.reduce( (accumulator,currentvalue)=>accumulator+currentvalue,3)
console.log(total);
const shoppingCart=[
    {
        itemname:"laptop",
        price:50000,
        quantity:1},
    {
        itemname:"mobile",
        price:20000,
        quantity:2},
    {
        itemname:"headphone",
        price:5000,
        quantity:3}
]
const totalPrice=shoppingCart.reduce( (total,item)=>{
    return total+item.price*item.quantity;
},0)
console.log(totalPrice);   
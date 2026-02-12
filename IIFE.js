// Immediately Invoked Function Expressions (IIFE) 
(function sanjeet(){
    // name IIFE,
    console.log(`Hello World`);
})();

( (name) =>{
    console.log(`Hello World 2 ${name}`);
})("sanjeet")
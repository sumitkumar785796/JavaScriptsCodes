/*
Arrow functions are a concise way to write function expressions in JavaScript. 
They were introduced in ECMAScript 6 (ES6) and provide a shorter syntax compared 
to traditional function expressions. Arrow functions are particularly useful for 
writing short, one-off functions.
*/
const Hello = () => console.log("Hello!");

// Calling the arrow function
Hello(); 
//pass argument in arrow function
const square = (x) => x * x;
console.log(square(4))
//create multiple statement in arrow function.It can use the cruly braces `{}`
const stud = (n) => {
    if(n%2==0){
        return "Even"
    } else{
        return "ODD"
    }

}
const result = stud(221) 
console.log(result)
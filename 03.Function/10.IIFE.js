/*

An Immediately Invoked Function Expression (IIFE) is a way to execute a function immediately after it is defined. 
It is often used to create a private scope for variables to avoid polluting the global scope. 
The syntax for an IIFE involves wrapping the function in parentheses and then immediately invoking it.

*/
(function() {
    // Your code here
    console.log("This is an Immediately Invoked Function Expressions(IIFE)!");
})
();
// pass argument IIFE
(function(x, y) {
    var result = x + y;
    console.log(result);
})
(10, 20); // Outputs: 30
//Arrow Function
(() => {
    console.log("This is an IIFE with an arrow function!");
})
();
/*
IIFE is commonly used in scenarios where you want to execute a block of code 
immediately without the need for creating a named function. Keep in mind that 
with the advent of block-scoped variables using let and const in modern JavaScript, 
the need for IIFE has somewhat diminished, but it still remains a useful pattern in certain situations.
*/
  
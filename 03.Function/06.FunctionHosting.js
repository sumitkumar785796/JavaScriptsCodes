/*
Function declarations are hoisted, which means they are moved to the top 
of their containing scope during the compilation phase. 
This allows you to call the function before it's declared in the code.
*/
console.log(myFun1(5,6))//calling function
function myFun1(a,b){
    return a+b
}
/* 
Function expressions are not hoisted in the same way as function declarations. 
You need to declare the variable before you can use the function.
*/
console.log(add(4,5))//TypeError: add is not a function
var add = function(a, b) {
    return a + b;
};
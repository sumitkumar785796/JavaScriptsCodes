/*
FunctionExpression
    A function expression is a way to define a function within an expression,
    typically by assigning it to a variable.
*/
const helloWorld = function(){
    console.log('Hello , World !')
}
//calling
helloWorld()
const add = function(a, b) {
    return a + b;
};
console.log(add(4,5))  
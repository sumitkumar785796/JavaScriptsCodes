/*
Named function expressions have the advantage of providing a name for 
the function inside the function itself, which can be useful for recursion or debugging.
*/
const add = function sum(a, b) {
    return a + b;
}
console.log(add(4,4))
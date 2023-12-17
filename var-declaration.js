//using var for variable declaration
var myVariable="hello,world!"
{
    var a=5
    console.log(a)
    console.log(myVariable)
}
console.log(myVariable)
console.log(a)

//scope of function
function myFun(){
    var myVar=15
    console.log(myVar)
}
myFun()
// console.log(myVar)//error are generated myVar is not defined
//reassining the variable
var x=2;
x=3;
console.log(x)
//redeclaring the variable
var y=2;
var y=4;
console.log(y)
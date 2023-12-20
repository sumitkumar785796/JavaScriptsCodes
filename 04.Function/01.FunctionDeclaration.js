//This is one of the most simple function is creating
function myFun(){
    const x=8
    console.log(x)
}
myFun() //calling function
//Parameteries Function
function myFun1(a,b){
    console.log(a+b)
}
myFun1(5,6)//calling function
//This function is default parameters
function addTwoNumber(a,b=0){
    console.log(a+b)
}
addTwoNumber(5,6)
//return type Parameteries Function
function myFun1(a,b){
    return a+b
}
const result=myFun1(5,6)
console.log(result)//calling function
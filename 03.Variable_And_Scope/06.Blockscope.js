// Block scope
{
    let x = 3
}
// console.log(x)//ReferenceError: x is not defined
{
    const x = 5
}
// console.log(x)//ReferenceError: x is not defined
{
    var x = 8
}
console.log(x)
{
    x = 6
}
console.log(x)
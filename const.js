const a=5
// const a=6//a has already been declared.It means not possible re-declaration
// a=9//assignment to constant variable is not possible
console.log(a)
function f(){
    const a = 6
    console.log(a)
}
f()
console.log(a)
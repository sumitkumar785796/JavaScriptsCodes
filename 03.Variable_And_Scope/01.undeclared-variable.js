//declaration of variable in javascripts

// x, y, and z are undeclared variables
x = 10;
y = "Hello";
z = true;
// They are automatically declared when first used
console.log(x); // Output: 10
console.log(y); // Output: Hello
console.log(z); // Output: true
//scope of declaration 
autoDeclarationVar=5
function examFun(){
    console.log(autoDeclarationVar)
}
examFun()
console.log(autoDeclarationVar)
//re-assign the value in same variable
undeclaredvariable="Initial value"
undeclaredvariable="New value"
console.log(undeclaredvariable)
{
    a=9
    console.log(a)
}
console.log(a)
console.log(b)
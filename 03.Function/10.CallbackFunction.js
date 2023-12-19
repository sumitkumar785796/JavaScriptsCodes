/* 
A callback function is a function passed as an argument 
to another function and is invoked after some task is complete.
*/
const add=(a,b)=>console.log(a+b);
const sub=(a,b)=>console.log(a-b);
const div=(a,b)=>console.log(a/b);
const call = (callback) =>{
    console.log("calculate");
    callback(32,20);
}
call(add);
call(sub);
call(div);
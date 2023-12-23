/* 
The call method is used to invoke a function with a specified this value and
 arguments provided individually.
*/
const printDetails=function(msg){
    console.log(msg)
    console.log(this)
}
const user1={
    name:'sumit kumar',
    age:21,
    gender:'male',
}
const user2={
    name:'saurav kumar',
    age:21,
    gender:'male',
}
const user3={
    name:'suraj kumar',
    age:21,
    gender:'male',
}
printDetails.call(user1,'user details')
printDetails.call(user2,'user details')
printDetails.call(user3,'user details')
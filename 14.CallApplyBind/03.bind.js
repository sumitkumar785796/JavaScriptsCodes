/*
The bind method creates a new function that, when called, 
has its this value set to a specific value, and returns a new function.
Syntax: function.bind(thisArg[, arg1[, arg2[, ...]]])
*/
/* 
The apply method is similar to call, but it takes arguments as an array.
Syntax: function.apply(thisArg, [argsArray])
*/
const printDetails=function(city,state,country){
    console.log(this)
    console.log(city+" "+state+" "+country)
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
printDetails.apply(user1,['Jehanabad','Bihar','India'])
printDetails.apply(user2,['Jehanabad','Bihar','India'])
printDetails.apply(user3,['Patna','Bihar','India'])
const newUser=printDetails.bind(user1,'Jehanabad', 'Bihar', 'India')
newUser()
const user=new Object();
user.firstname='sumit'
user.lastname='kumar'
user.age=21
user.fullnames=function(){
    console.log(this.firstname+" "+this.lastname)
}
user.address={
    distict:'Jehanabad',
    state:'Bihar',
    pincode:804408,
}
//accessing object
console.log(user)
console.log(user.firstname)
console.log(user.lastname)
console.log(user.age)
console.log(user.address)
user.fullnames()
//modify object
user.age=22
user.address['distict']='jbad'
console.log('Modify value:',user.age)
console.log('Modify value:',user.address.distict)
//Iterate for...in loop
console.log('Iterate value')
for (let key in user) {
    console.log(key + ': ' + user[key]);
}
// Using for...in loop to iterate over object properties
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(key + ':', user[key]);
    }
}

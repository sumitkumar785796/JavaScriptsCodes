const user={
    fname:'sumit',
    lname:'kumar',
    age:21,
    skill:['nodejs','javascript'],  
    address:{
        distict:'Jehanabad',
        state:'Bihar',
        pincode:804408,
    },
    fullname:function(){
        return this.fname +" "+ this.lname;
    },
    regStatus:false,
}
//Iterate for...in loop
console.log('Iterate value')
for (const key in user) {
    console.log(key + ': ' + user[key]);
}
// Using for...in loop to iterate over object properties
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(key + ':', user[key]);
    }
}
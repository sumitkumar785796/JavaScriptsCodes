const user={
    fname:'sumit',
    lname:'kumar',
    age:21,
    skill:['nodejs','javascript'],  
    address:{
        district:'Jehanabad',
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
for (const key of Object.keys(user)) {
    console.log(key + ': ' + user[key]);
}
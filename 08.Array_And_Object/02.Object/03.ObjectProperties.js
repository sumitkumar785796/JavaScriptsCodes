let person={
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
let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);
console.log(keys);
console.log(values);
console.log(entries);
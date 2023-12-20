const stud={
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
console.log(stud.fname)
console.log(stud.fullname())
console.log(stud.skill[0])
console.log(stud.address.distict)
console.log(stud.regStatus)
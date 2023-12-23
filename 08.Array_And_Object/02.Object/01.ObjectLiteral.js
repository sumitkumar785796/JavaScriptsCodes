const stud={
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
//accessing the object
console.log(stud)
console.log(stud.fname)
console.log(stud.fullname())
console.log(stud.skill[0])
console.log(stud.address.district)
console.log(stud.regStatus)
//modify object
stud.age=22
stud['skill']=['javascript','react','node js','mongodb','express js']
console.log('change age:',stud.age)
console.log('change skil:',stud.skill)
// another example

const user={}
user.firstname='sumit'
user.lastname='kumar'
user.ag=21
user.fullnames=function(){
    console.log(this.firstname+" "+this.lastname)
}
user.address={
    district:'Jehanabad',
    state:'Bihar',
    pincode:804408,
}

//accessing object
console.log(user)
console.log(user.firstname)
console.log(user.lastname)
console.log(user.ag)
console.log(user.address)
user.fullnames()
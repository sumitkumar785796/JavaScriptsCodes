//constructor function
function createStudentRecord(name,age){
    this.name=name
    this.age=age
}
const person1=new createStudentRecord('sumit kumar',21)
const person2=new createStudentRecord('aman kumar',21)
console.log(`my name is ${person1.name} and I'm ${person1.age} year old.`)
console.log(`my name is ${person2.name} and I'm ${person2.age} year old.`)
console.log(person2)
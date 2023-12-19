// Constructor function
function CreateStudentRecord(name, age) {
    this.name = name;
    this.age = age;
    this.show = function() {
      console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    };
  }
  
  // Creating instances of the 'CreateStudentRecord' object
  const person1 = new CreateStudentRecord('Sumit Kumar', 21);
  const person2 = new CreateStudentRecord('Aman Kumar', 21);
  
  // Calling the 'show' method on each instance
  person1.show(); // Output: My name is Sumit Kumar and I'm 21 years old.
  person2.show(); // Output: My name is Aman Kumar and I'm 21 years old.
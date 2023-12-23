const user = {
    fname: 'sumit',
    lname: 'kumar',
    age: 21,
    skill: ['nodejs', 'javascript'],
    address: {
      city: 'Jehanabad',
      state: 'Bihar',
      country: 'India',
      pincode: 804408,
    },
    fullname: ()=> {
      return fname + ' ' + lname;
    },
    regStatus: false,
  };
  
  // Destructuring assignment
  const { fname, lname, age, skill, address: { city, state, country, pincode }, fullname, regStatus } = user;
  console.log(fullname()); 
  console.log(age);
  console.log(skill);
  console.log(city);
  console.log(pincode);
  
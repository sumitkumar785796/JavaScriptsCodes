const users = [
    { uid: 1, fname: "sumit", gender: 'male' },
    { uid: 2, fname: "rakesh", gender: 'male' },
    { uid: 3, fname: "aman", gender: 'male' },
    { uid: 4, fname: "aniket", gender: 'male' }
  ];
  
  const [{ uid, fname, gender }, { uid: uid1, fname: fname1, gender: gender1 }, { uid: uid2, fname: fname2, gender: gender2 },{ uid: uid3, fname: fname3, gender: gender3 }] = users;
  
  console.log(uid + " " + fname + " " + gender);
  console.log(uid1 + " " + fname1 + " " + gender1);
  console.log(uid2 + " " + fname2 + " " + gender2);
  console.log(uid3 + " " + fname3 + " " + gender3);
  
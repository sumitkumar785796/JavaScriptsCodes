const array=[1,2,3,4,5,6]
const [a,b,c,d,e]=array
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
//skip one array
const array1=[1,2,3,4,5,6]
const [a1,,e1]=array1
console.log('skip array')
console.log(a1);
console.log(e1);
//rest parameter
const array2=[1,2,3,4,5,6]
const [f,...rest]=array2
console.log('rest parameter')
console.log(f)
console.log(rest)
//default value
const arr=[1,2,3]
const [a11=0,b11=0,c11=0,d11=0,f11=0]=arr
console.log(a11)
console.log(b11)
console.log(c11)
console.log(d11)
console.log(f11)
// swapping value
let x = 5, y = 10;
[x, y] = [y, x];
console.log('before swap')
console.log(x); // Output: 10
console.log(y); // Output: 5

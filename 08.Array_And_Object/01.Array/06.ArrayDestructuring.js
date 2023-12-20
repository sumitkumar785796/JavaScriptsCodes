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
// function value
const dest = ([ar,br,cr=0])=>{
    console.log('function value')
    console.log(ar)
    console.log(br)
    console.log(cr)
}
dest([1,2])

const user=()=> {
    return ['sumit',21]
}
const [fname,age]=user()
console.log(fname)
console.log(age)
//nested destructuring
const arrr=['sumit kumar',21,['jehabad','bihar',804408]]
const [fullname,year,[...res]]=arrr
console.log(fullname)
console.log(year)
console.log(res)
// console.log(city)
// console.log(state)
// console.log(pincode)

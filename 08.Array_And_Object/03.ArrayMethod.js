//push is adding the element end of the array
const num=[1,2,3,4,5]
num.push(6)
const str=['sk','pl','ck','nk','rk']
str.push('ak')
console.log(num)
console.log(str)
//pop is remove the element end of the array
num.pop()
console.log('poped element:',num)
//unshift is adding the element to the begining of the array
num.unshift(0)
console.log(num)
//shift is the remove the element to the begining of the array
str.shift()
console.log("remove element begining:",str);
//push and pop is fast as compare to unshift and shift

// At position 2, remove 2 items
num.splice(2, 2)
console.log(num)
// Returns elements at index 1 and 2
const subset=[1,2,3,4,5,6,7,8]
console.log(subset.slice(1,3))
//concat is join the two or more arrays
const arr1=[1,2,3,4,5]
const arr2=[6,7,8,9,0]
const add=arr1.concat(arr2)
console.log(add)
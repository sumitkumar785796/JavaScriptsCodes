const mySet = new Set()
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(1)//adding a duplicate value, but it won't be added
console.log(mySet)
//check if a value exists in the set using has method
console.log(mySet.has(2));
console.log('size of set:',mySet.size)
//remove a value from the set using delete method
mySet.delete(3)
//Iterate the value in set using for...of loop
for( const val of mySet){
    console.log("value of myset is ",val)
}
//clear all the record
mySet.clear()
console.log(mySet)
const array=[1,2,3,4,5,5,5,6,7,7,8,9]
const data= new Set(array)
//print size
console.log(data.size)
//iterate the value
for(const val of data){
    console.log(val)
}
//set value iterate the array
const data1= [...new Set(array)]
console.log(data1)
//iterate the forEach loop
data1.forEach(value=>{
    console.log(value)
})
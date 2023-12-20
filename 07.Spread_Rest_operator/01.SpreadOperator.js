//Spread operator in Array Case
const array1=[1,2,3,4]
const array2=[...array1,5,6,7]
const array3=[1,2,3,...array1,5,6,7]
const array4=[1,2,3,4,5,6,7,...array1]
console.log(array2)
console.log(array3)
console.log(array4)
//Spread Operator in Object Case
const obj1={
    key1:'value1',
    key2:'value2',
    key3:'value3',
    key4:'value4'
}
const obj2={
    key5:'value5',
    key6:'value6',
    key7:'value7',
    key8:'value8',
    key9:{
        keys1:'values1',
        keys2:'values2',
    }
}
const newObj={...obj1,...obj2,key10:'value10'};
console.log(newObj);
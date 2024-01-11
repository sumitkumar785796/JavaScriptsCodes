const array=[1,2,3,4,5]
const newArray=array.map(function(num){
    return num*num
})
// console.log(newArray)
let data=""
newArray.forEach(function(val,key){
    data += key+":"+val+"\n";
})
console.log(data)
//another map creation
const user=new Map([
    ['sk',21],
    ['ak',22],
    ['rk',23],
    ['rk',23]
])
// Sets the value for a key in a Map
user.set(['pk',23])
user.set(['nk',23])
// Gets the value for a key in a Map
console.log('return the value of sk '+user.get("sk"))
// Removes a Map element specified by the key
// console.log(user.delete("ak"))
user.delete("rk")
let text = "";
// user.forEach (function(val,key){
//     text += key + '=' + val+"\n";
// })
for(const x of user.entries()){
    text += x+"\n"
}
console.log(text)
// The size property returns the number of elements in a Map
console.log(user.size)

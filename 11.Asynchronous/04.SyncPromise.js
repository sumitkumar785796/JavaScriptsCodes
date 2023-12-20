//Create a promise
const ticket = new Promise(function(resolve,reject){
    const isBorded=false;
    if(isBorded){
        resolve('you are not in the flight')
    }else{
        reject('your flight has been cancelled')
    }
});
//using a promise
ticket.then((data)=>console.log('woo',data))
.catch((data)=>console.log('oops!!',data))
.finally(()=>console.log('I will always be executed'))
function getCheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const cheese='🧀'
            resolve(cheese)
        }, 2000)
    })
}
function getDough(cheese,callback){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        const dough=cheese+'🍩' 
        resolve(dough)
        }, 2000)
    })
}
function getPizza(dough,callback){
    return new Promise((resolve,reject)=>{    
        setTimeout(() => {
        const pizza=dough+'🍕'
        resolve(pizza)
        }, 2000)
    })
}
getCheese().then((cheese)=>{
    console.log('here is ',cheese); 
    return getDough(cheese)
}).then((dough)=>{
    console.log('here is ',dough);
    return getPizza(dough)
}).then((pizza)=>{
    console.log('here is ',pizza); 
}).catch((data)=>console.log('error occured',data))
.finally(()=>console.log('process ended'))
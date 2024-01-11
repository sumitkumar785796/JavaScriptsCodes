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
async function orderPizza(){
    try{
        const cheese = await getCheese();
        console.log('here is ',cheese); 
        const dough = await getDough(cheese);
        console.log('here is ',dough);
        const pizza = await getPizza(dough);
        console.log('here is ',pizza);
    }catch(err){
        console.log('error occured',err);
    }
}
orderPizza()
function getCheese(callback){
    setTimeout(() => {
       const cheese='🧀'
       console.log('here is ',cheese); 
       callback(cheese)
    }, 2000);
}
function getDough(cheese,callback){
    setTimeout(() => {
       const dough=cheese+'🍩'
       console.log('here is ',dough); 
       callback(dough)
    }, 2000);
}
function getPizza(dough,callback){
    setTimeout(() => {
       const pizza=dough+'🍕'
       console.log('here is ',pizza); 
       callback(pizza)
    }, 2000);
}
getCheese((cheese)=>{
    getDough(cheese,(dough)=>{
        getPizza(dough,(pizza)=>{
            console.log('got my recp',pizza)
        })
    })
})
/*
Iterators and Generators bring the concept of iteration directly 
into the core language and provide a mechanism for customizing the behavior of for...of loops.

Generator Function
Introduced in ES6, generator functions allow you to pause and resume the execution of a function.
They use the function* syntax.
yield keyword is used to always use the generator function
*/
function* count(){
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
}
const even=count()
console.log(even)
for(let i of even)
    console.log(i)

function* makeIterator(start,end,step=1){
    for(let i=start;i<=end;i+=step){
        yield i;
    }
}

const one = makeIterator(1,10)
for(const val of one)
    console.log(val);
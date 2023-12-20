/*
Introduced in ECMAScript 6 (ES6), symbols are unique and immutable primitive values.
When you create a Symbol in JavaScript using the Symbol() constructor, 
you can assign it to a variable and then use that variable to access the Symbol
*/
let sym = Symbol("uniqueSymbol");
console.log(sym)
// Accessing the description of the Symbol
console.log(sym.description);
/*
The string inside the parentheses is the description you provided when creating the Symbol. Note that this description doesn't affect the uniqueness or identity of the Symbol; it's just a human-readable label.

If you want to access the description programmatically, you can use the Symbol.description property:
*/

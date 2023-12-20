// A function that takes one or more functions as arguments or returns a function.

// Your function definition
function multiplier(factor) {
    return function (x) {
      return x * factor;
    }
}

// Create a new function with factor = 2
let double = multiplier(2);

// Call the new function with an argument
let result = double(5);

// Output the result
console.log(result); // Output: 10

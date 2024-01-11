/*
Throwing Custom Errors:

You can throw custom errors using the throw statement, and then catch them in a try...catch block.
*/
function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}  
try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}
  
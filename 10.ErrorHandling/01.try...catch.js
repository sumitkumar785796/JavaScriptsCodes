/*
try...catch Statement:
The try...catch statement allows you to handle exceptions (errors) 
that might occur in a specific block of code.
*/
try {
    // Code that might throw an exception
    const result = 10 / 0; // This will throw a division by zero error
    console.log(result); // This line won't be executed if an error occurs
  } catch (error) {
    // Code to handle the exception
    console.error("An error occurred:", error.message);
  } finally {
    // Optional: Code that will always run, whether there was an error or not
    console.log("This will always be executed.");
  }
  
// callback function
function fetchData(callback) {
    // Simulating an asynchronous operation 
    setTimeout(() => {
      const data = "Some data";
      callback(data);
    }, 1000);
}
fetchData((result) => console.log(result))
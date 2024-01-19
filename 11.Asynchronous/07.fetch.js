async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // You might want to handle the error accordingly in your application
    }
}

// Using async/await
async function fetchDataAndLog() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        // Handle error
        console.error('Error fetching data:', error);
    }
}
// Call the async function
fetchDataAndLog();
// or using .then() with a Promise
// fetchData().then(data => console.log(data)).catch(error => console.error(error));

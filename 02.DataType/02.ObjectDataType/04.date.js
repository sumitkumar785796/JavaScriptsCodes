let currentDate = new Date();
console.log(currentDate);// output:-2023-12-20T08:09:45.011Z


// Extracting date components
let month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
let day = currentDate.getDate();
let year = currentDate.getFullYear() % 100; // Using % 100 to get the last two digits of the year

// Formatting date as "MM/DD/YY"
let formattedDate = `${month}/${day}/${year}`;

// Printing the formatted date
console.log(formattedDate);

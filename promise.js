// A JavaScript Promise represents a value that may be available now, or in the future, or never. It simplifies asynchronous operations, making it easier to handle success and failure cases.

// Here's a simple example to illustrate how a Promise works:

// Structure of a Promise:
// Producing Code: Performs an async operation (like fetching data).
// Consuming Code: Handles the result (success or error).
// Producing Code
const myPromise = new Promise((resolve, reject) => {
    const success = false; // Simulating success or failure
    
    if (success) {
      resolve({
        name : "julia",
        age  : 655
      }); // Successfully produced the value
    } else {
      reject("Promise rejected! 😢"); // Something went wrong
    }
});
  
  // Consuming Code
  myPromise
    .then((result) => {
    //   console.log(result); // "Promise resolved! 🎉"
    })
    .catch((error) => {
    //   console.error(error); // "Promise rejected! 😢"
    });
// like fetch 
// Producing Code: Fetch data from an API
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data); // Simulate successful data fetch
      // reject("Failed to fetch data"); // Uncomment to simulate an error
    }, 2000); // Simulate delay
});
  
  // Consuming Code
fetchData
    .then((data) => {
      console.log("Data fetched:", data); // Output: { name: "John", age: 30 }
    })
    .catch((error) => {
      console.error(error); // Output: "Failed to fetch data"
});
  
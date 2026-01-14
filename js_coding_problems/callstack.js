function first() {
  console.log("First!");
  second(); // Call second function
}

function second() {
  console.log("Second!");
  third(); // Call third function  
}

function third() {
  console.log("Third!");
}

first(); // Start execution

// note nice to visualize:https://www.jsv9000.app/
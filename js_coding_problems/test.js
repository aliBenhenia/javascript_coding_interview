console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");


// Call Stack (Desk)
// +-----------------+
// | console.log     |
// +-----------------+
// | main function   |
// +-----------------+

// Web APIs (Helpers)
// +-----------------+
// | setTimeout 0ms  |
// | fetch()         |
// +-----------------+

// Task Queue (Inbox)
// +-----------------+
// | setTimeout cb   |
// +-----------------+

// Microtask Queue (Urgent Inbox)
// +-----------------+
// | Promise cb      |
// +-----------------+

// Event Loop (Mailman)
// 1. Check stack
// 2. If empty, take microtask first
// 3. Then take macrotask


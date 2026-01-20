// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");


// // Call Stack (Desk)
// // +-----------------+
// // | console.log     |
// // +-----------------+
// // | main function   |
// // +-----------------+

// // Web APIs (Helpers)
// // +-----------------+
// // | setTimeout 0ms  |
// // | fetch()         |
// // +-----------------+

// // Task Queue (Inbox)
// // +-----------------+
// // | setTimeout cb   |
// // +-----------------+

// // Microtask Queue (Urgent Inbox)
// // +-----------------+
// // | Promise cb      |
// // +-----------------+

// // Event Loop (Mailman)
// // 1. Check stack
// // 2. If empty, take microtask first
// // 3. Then take macrotask

// set
// const data = new Set([1,1,1,1,1,1,3,4,45,5]);
// console.log([...data][3])
// rm duplictae
// const nums = [1,3,3,34,4,3,3,4667,66];
// const unique = new Set([...nums]);
// const uArr = [...unique].sort()// method chaning in js
// console.log(uArr)
// const data = new Map();
// for (let i = 0; i<10;i++)
// {
//   data.set(i, `hello ${i}`);
// }
// for (let it of data)
// {
//   console.log(it[1])
// }
const d = [];
d.push([1,1,2,2,]);
d.push([1,1,2,2,]);
console.log(d)
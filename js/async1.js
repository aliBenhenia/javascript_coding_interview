// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

const add = ()=>{
    while(1){}
}

async function myFunction() {
    throw "errrrrr";
    return "Hello";
}
// return promise pending,success, error..in succes return normally,,in er throw exption
// is saaame
// function myFunction() {
//     return Promise.resolve("Hello");
// }

// myFunction().then((res)=>{
//     console.log(res);
// }).catch((er)=>{
//     console.error(er);
// })

// The await keyword can only be used inside an async function.

// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {
        resolve("I love You !!");
      }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise; // pause excution untle retreive promise
    // will not process here before get promise
  }
  
  myDisplay();

//   Awaiting the Promise:
// javascript

// Copy
// document.getElementById("demo").innerHTML = await myPromise;
// The await keyword pauses the execution of the myDisplay function until myPromise is fulfilled.
// Once the promise is resolved (after 3 seconds), it retrieves the value "I love You !!" and assigns it to innerHTML of the HTML element with the id demo.



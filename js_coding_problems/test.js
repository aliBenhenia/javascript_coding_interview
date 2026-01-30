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
// const d = [];
// d.push([1,1,2,2,]);
// d.push([1,1,2,2,]);
// console.log(d)
// const arr = [1,1,1,1,3,23,3,3,3,3,4,9,9,9, true, true];
// const clean = [...new Set([...arr])];
// // console.log(clean);
// class Counter{
//     #m = 1
//     constructor(x = 55)
//     {
//         this.x = x;
//         var m = 11; // private
//     }
//     increment(){
//         this.x++;
//         this.m++;
//         console.log(this.x);
//     }
//     getM(){
//         return m}
// }
// const c = new Counter();
// c.increment()
// c.increment()
// console.log(c.getM())

// c.increment()

class Animal {
    constructor(name)
    {
        this.name = name;
    }
    speak()
    {
        console.log("animal")
    }
}
class Gen{// use without instance
    static name = "aura"
}
class Dog extends Animal{
    #balance = 564664;
    constructor (name) {
        super(Gen.name);// for parent
    }
    speak()// overrided polymorphsim
    {
        console.log("dog")
        this.#print()
    }
    #print()
    {
                console.log(this.#balance)

    }
}
const d = new Dog("rooop");
d.speak()
// d.print()
console.log(d.name)

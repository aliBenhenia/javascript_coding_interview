function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}



const counter = createCounter();
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.getCount());  // 2
// console.log(counter.decrement()); // 1

// opbject my case
const data = {
    counter : 0,
    increment : function(){
        this.counter++;
    },
}
data.increment();
data.increment();
data.increment();

console.log(data.counter)
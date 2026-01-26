const ClosureCounter = (init)=>{// outer
    let counter = init;
    function increment(){// inner remember the va
        counter++;
        return counter;
    }
    return {increment};
}
const saved = ClosureCounter(55);
console.log(saved.increment())
console.log(saved.increment())
console.log(saved.increment())

// implemneted with class
class ClosureCounterClass {
    constructor(init = 0)
    {
        let counter = init; // private variable
        this.increment = ()=>{
            counter++;
        }
        this.getCounter = ()=>{
            return counter;
        }
    }
}

const counter = new ClosureCounterClass();
counter.increment();// 1
counter.increment();// 2
console.log(counter.getCounter())
counter.increment();// 3
console.log(counter.getCounter())


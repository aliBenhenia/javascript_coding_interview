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
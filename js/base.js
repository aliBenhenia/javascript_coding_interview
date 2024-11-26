const createBase = (n)=>{
    let base = n;
    return ((add)=>{
        return (add + n);
    })
}

const addSix = createBase(6);
// console.log(addSix(10))
// console.log(addSix(21))


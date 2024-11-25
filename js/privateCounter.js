const mainFunc = ()=>{
    let counter = 0;// private
    return (
        {
            increment : function (){ counter++},
            decrement : function (){ counter--},
            reset : function (){ counter = 0},
            getCounter : function(){return (counter)},
            byAmount : function(amount){counter = amount},
        }
    );
}

const counter = mainFunc();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.reset();
counter.byAmount(100);
console.log(counter.getCounter());
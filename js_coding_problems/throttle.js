const throttle = (fn, ms)=>{
    let canRun = true;
    return function(){
        if (canRun)
        {
            fn(); // call it here..
            canRun = false;
            setTimeout(()=> canRun = true, ms)
        }
    }
}
const runner = throttle(()=> console.log("yes"),1000);
runner();
runner();
runner();
let x = 0;
console.log("ddd      :"+x);
setInterval(()=>{
    x++;
    console.log(x)
},500)

setTimeout(()=>{
    console.log("new      :"+x);
},2000)
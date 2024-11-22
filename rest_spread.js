const print = (...rest)=>{
    console.log(rest.filter((n)=> n<= 10).map((n)=> n * 2))
    
}

print(1,2,3,100,8)
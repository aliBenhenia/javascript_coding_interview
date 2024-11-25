/*
     call back function is function passed as argument in other function 
     A callback function can run after another function has finished
*/


const printer = (s)=>
{
    console.log(s);
}

const do_some = (a, b, callBack)=>
{
    let res = a + b;
    callBack(res);
}

do_some(7,3,(s)=> printer);
do_some(7,31,(s)=> console.log(s));

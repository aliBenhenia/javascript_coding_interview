const compareObj = (ob1, ob2)=>{
    return JSON.stringify(ob1) == JSON.stringify(ob2) ;
}
const ob1 = {
    name : 1,
    id : 123,
    itr : false
}
const ob2 = {
    name : 1,
    id : 123,
    itr : false
}
console.log(compareObj(ob1, ob2))
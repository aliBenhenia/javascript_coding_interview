const deep = {
    name : "john",
    data : {
        id : 1,
        job : "marketer"
        // etc
    },
    age : 66
}

const clone_object = (obj)=>{
    return JSON.parse(JSON.stringify(obj))
}

const res = clone_object(deep);
console.log(res.data.id)
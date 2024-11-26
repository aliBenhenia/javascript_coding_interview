const giveMe = (obj,ob2)=>{
    return({...obj,...ob2}); // descruct prps of each obj in one {}
}


console.log(giveMe({ali:1, zineb:2,ibtisam:3}, {ali2:1, zineb2:2,ibtisam2:3}));
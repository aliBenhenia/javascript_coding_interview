interface storeType{
    model : number,
    price : number
}

interface userProps<T>
{
    data : T[],
    name : string,
};

const user:userProps<number> = {
    data : [1,2,3,4],
    name : "ali"
};
const user1:userProps<string> = {
    data : ["1,2,3,4","dd","ded"],
    name : "ali"
};
const user2:userProps<boolean> = {
    data : [true,false],
    name : "ali"
};
const user3:userProps<storeType> = {
    data : [{model : 1, price : 33}],
    name : "ali"
};




console.log(user.data[0])


const printer = <T>(arg: T)=>{
    console.log(arg)
}

printer(1);
printer("wd");
printer(user1);



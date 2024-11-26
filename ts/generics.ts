interface userProps<T>
{
    data : T[],
    name : string,
};

const user:userProps<number> = {
    data : [1,2,3,4],
    name : "ali"
};

console.log(user.data[0])




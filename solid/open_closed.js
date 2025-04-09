class FootBaller{
    constructor(name,age,role)
    {
        this.name = name;
        this.age = age;
        this.role = role; // type difined
    }
    getRole()
    { 
        return(this.role.getRole()); // role.getRole() has no relation with FootBaller getRole
    }
}
class PlayerRole{
    getRole(){ // abstractions
        throw new Error("subclass should has getPlayerRole implention");
    } // has no implenetaions 
}

class GoalKeeper extends PlayerRole
{
    getRole()
    {
        return (new String("goal"));
    }
}
class DefinderKeeper extends PlayerRole
{
    getRole()
    {
        return (new String("difender"));
    }
}
class AttakerKeeper extends PlayerRole
{
    getRole()
    {
        return (new String("attaker"));
    }
}
const p1 = new FootBaller("messi", 38, new GoalKeeper());
const p2 = new FootBaller("messi", 38, new DefinderKeeper());
const p3 = new FootBaller("messi", 38, new AttakerKeeper());
console.log("==> ",p1.getRole());
console.log("==> ",p2.getRole());
console.log("==> ",p3.getRole());
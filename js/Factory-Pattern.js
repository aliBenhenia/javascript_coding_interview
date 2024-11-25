class Vehicle
{
    static choose(type)
    {
        if (type == "car")
        {
            return new Car("bmw");
        }
        else if (type == "bike")
        {
            return new Car("sdf");
        }
    }
}

class Car{
    constructor(name)
    {
        this.name = "julia";
    }
    print()
    {
        console.log(this.name);
    }
}
class bike{
    constructor(name)
    {
        this.name = "rider";
    }
    print()
    {
        console.log(this.name);
    }
}

const a =  Vehicle.choose("car");
a.print();
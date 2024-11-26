abstract class Shape{
    abstract area(n:number):number;// has no impneltion
    abstract print():void;
}

class Square extends Shape{
    area(n:number): number {
        return n;
    }
    print():void{
        console.log(`square`);
    }
}
class Circle extends Shape{
    area(n:number): number {
        return n;
    }
    print():void{
        console.log(`circle`);
    }
}

const instance = new Square();
console.log(instance.area(33));

const printAbstract = (shape_:Shape)=>{// hard to debug
    shape_.print();
}


printAbstract(new Square());
printAbstract(new Circle());
// printAbstract(new Shape());// cant create a instnce from abstract class

// Properties and Methods
// Access Modifiers (public, private, protected)
// Constructors for initialization
// Inheritance using extends
// Getters and Setters for custom property access
// Static Members that belong to the class, not instances
// Abstract Classes to define base classes for other classes to extend
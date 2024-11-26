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
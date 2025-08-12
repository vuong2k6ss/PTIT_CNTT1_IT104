abstract class Animal {
    name: string;
    constructor(name: string){
        this.name = name;
    }

    abstract makeNoise(): void;

    printName(){
        console.log(`${this.name}`);
        
    }
}

class Dog extends Animal{
    makeNoise(): void {
        console.log("gâu gâu");
    }
    printName(): void {
        super.printName();
    }
    
}

class Cat extends Animal{
    makeNoise(): void {
        console.log("meo meo");
    }
    printName(): void {
        super.printName();
    }
    
}

const dog = new Dog("shiba");

const cat = new Cat("mèo vàng");

dog.printName();
dog.makeNoise();
cat.printName();
cat.makeNoise();

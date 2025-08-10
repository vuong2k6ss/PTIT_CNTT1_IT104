class Animal{
    private name: string;
    protected age: number;
    public species: string;

    constructor(name: string, age: number, species: string){
        this.name = name;
        this.age = age;
        this.species = species;
    }

    get getName(): string{// lấy ra private
        return this.name;
    }

    set setName(newName: string){//thay đổi gá trị cần truyền tham số
        this.name = newName;
    }

    get getAge(): number{
        return this.age;
    }

    set setAge(newAge: number){
        this.age = newAge;
    }

    speak(): void{
        console.log("Animal sound");
    }

}


class Dog extends Animal {
    public breed: string;

    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }

    speak() {
        console.log("gau gau");
        
    }
}

class Cat extends Animal {
    public breed: string;

    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("meo meo");
        
    }
}

class Birtd extends Animal {
    public breed: string;

    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }

    speak() {
        console.log("hehe");
        
    }
}

const dog = new Dog("shiba", 5, "chó ta", "husky");
dog.setName = " ngu ngoc"//khi có ham set có thể thay đổi private, gán lại name
console.log(dog);

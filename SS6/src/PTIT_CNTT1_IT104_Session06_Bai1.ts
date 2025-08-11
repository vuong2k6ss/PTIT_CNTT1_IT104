abstract class Shape{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    abstract getSize(): void;


}


class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(name: string, width: number, height: number) {
        super(name); // gọi constructor lớp cha
        this.width = width;
        this.height = height;
    }
    getSize(): void {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
}

const rect = new Rectangle("Hình chữ nhật", 10, 20);
console.log(rect.getName()); 
rect.getSize();

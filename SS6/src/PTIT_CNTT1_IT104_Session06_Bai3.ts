abstract class Shapes {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Method thường -> có sẵn code
    getName(): string {
        return this.name;
    }

    // Abstract method -> bắt buộc lớp con viết code
    abstract getArea(): number;
}

class Rectangles extends Shapes {
    width: number;
    height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    // Bắt buộc phải override
    getArea(): number {
        return this.width * this.height;
    }
}

const rectangle = new Rectangles("Hình chữ nhật", 10, 5);
console.log(rectangle.getName()); 
console.log(rectangle.getArea()); 

class Rectangle{
    private width: number;
    private height: number;

    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    getWidth(){
        return this.width;
    }

    setWidth(newWidth: number){
        return this.width = newWidth;
    }

    getHeigth(){
        return this.height;
    }

    setHeight(newHeigth: number){
        return this.height = newHeigth;
    }

    perimeter(){
        return (this.width+this.height)*2;
    }

    area(){
        return this.width*this.height;
    }

}

const rectangle = new Rectangle(2, 4);
console.log(` chu vi : ${rectangle.perimeter()}, diện tích: ${rectangle.area()}`);
console.log("sau khi thay đổi gia tri:");

rectangle.setHeight(5)
rectangle.setWidth(3)
console.log(` chu vi : ${rectangle.perimeter()}, diện tích: ${rectangle.area()}`);
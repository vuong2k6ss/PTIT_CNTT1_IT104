class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: string;

    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(amount: number) {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0;
    }

    speedUp(amount: number) {
        this.speed += amount;
    }

    showSpeed() {
        console.log(`${this.name} chạy với tốc độ: ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    showInfo() {
        this.showSpeed();
        console.log(`Số bánh răng (gear): ${this.gear}`);
    }
}


const bike = new Bicycle("Xe máy", 10, "A29", 15);

bike.speedUp(15);

bike.slowDown(5);
bike.speedUp(10);
bike.showInfo();

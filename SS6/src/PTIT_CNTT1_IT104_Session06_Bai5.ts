interface changeSpeed {
    speedUp(amount: number): void;  
    slowDown(amount: number): void;  
    stop(): void;              
}

class Vehicle implements changeSpeed {
    private speed: number; // tốc độ hiện tại

    constructor(initialSpeed: number = 0) {
        this.speed = initialSpeed;
    }

    speedUp(amount: number): void {
        this.speed += amount;
        console.log(`Tăng tốc thêm ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    slowDown(amount: number): void {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0; // Không cho tốc độ âm
        console.log(`Giảm tốc ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`Dừng xe. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}

// Test
const car = new Vehicle();

car.speedUp(50); 
car.slowDown(20); 
car.stop();    

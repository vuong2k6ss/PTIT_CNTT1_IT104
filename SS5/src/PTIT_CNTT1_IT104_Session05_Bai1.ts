class Vehicle {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string){
        this.name = name;
        this.year = year;
        this.company = company;
    }

    printInfo() {
        console.log(`Tên: ${this.name}, Năm SX: ${this.year}, Hãng: ${this.company}`);
    }
}

let vehicle1 = new Vehicle("lambo", 2020, "S-channel");
let vehicle2 = new Vehicle("rollroy", 2021, "B-start");

console.log(vehicle1);
console.log(vehicle2);


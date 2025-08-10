"use strict";
class Vehicles {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        console.log(`Tên: ${this.name}, Năm SX: ${this.year}, Hãng: ${this.company}, id: ${this.id}`);
    }
}
const vehicle1s = new Vehicles("lambo", 2020, "S-channel", "a01");
const vehicle2s = new Vehicles("rollroy", 2021, "B-start", "a02");
console.log(vehicle1s);
console.log(vehicle2s);

"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    printInfo() {
        console.log(`Tên: ${this.id}, Năm SX: ${this.age}, Hãng: ${this.email}`);
    }
}
let students = [];
students.push(new Student(1, 20, "ahihi@gmail.com"));
students.push(new Student(2, 21, "bhihi@gmail.com"));
students.push(new Student(3, 22, "chihi@gmail.com"));
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

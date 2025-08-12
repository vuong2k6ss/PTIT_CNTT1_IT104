abstract class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract displayInfo(): void;
}

class Student extends Person {
    private id: string;

    constructor(name: string, id: string) {
        super(name);
        this.id = id;
    }

    displayInfo(): void {
        console.log(`Sinh viên: ${this.name}, ID: ${this.id}`);
    }
}

class Teacher extends Person {
    private subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    displayInfo(): void {
        console.log(`Giáo viên: ${this.name}, Môn dạy: ${this.subject}`);
    }
}

const student = new Student("Nguyen Van A", "S12345");
student.displayInfo();

const teacher = new Teacher("Tran Thi B", "Toán học");
teacher.displayInfo();

class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
        this.name = newName;
    }
}

let allStudents: Student[] = [];

class Classroom {
    students: Student[] = [];

    showStudents(): void {
        console.log("Danh sách học sinh trong lớp:");
        if (this.students.length === 0) {
            console.log("Không có học sinh nào");
            return;
        }
        this.students.forEach((s) => {
            console.log(`ID: ${s.getId()}, Name: ${s.getName()}`);
        });
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    filterStudent(id: number): Student[] {
        return this.students.filter((s) => s.getId() === id);
    }

    addStudentInClass(id: number): void {
        const index = allStudents.findIndex((s) => s.getId() === id);
        if (index !== -1) {
            const student = allStudents[index];
            this.addStudent(student);
            allStudents.splice(index, 1); // Xóa khỏi allStudents
        } else {
            console.log(`Không tìm thấy học sinh ID: ${id} trong allStudents`);
        }
    }

    // Xóa học sinh ra khỏi lớp và đưa về allStudents
    removeStudent(id: number): void {
        const index = this.students.findIndex((s) => s.getId() === id);
        if (index !== -1) {
            const removedStudent = this.students[index];
            allStudents.push(removedStudent); // đưa lại vào allStudents
            this.students.splice(index, 1);   // xóa khỏi lớp
            console.log(`Đã xóa học sinh ID: ${id} khỏi lớp`);
        } else {
            console.log(`Không tìm thấy học sinh ID: ${id} trong lớp`);
        }
    }

    // Sửa thông tin học sinh trong lớp
    editStudent(id: number, newName: string): void {
        const student = this.students.find((s) => s.getId() === id);
        if (student) {
            student.setName(newName);
            console.log(`Đã sửa tên học sinh ID: ${id} thành "${newName}".`);
        } else {
            console.log(`Không tìm thấy học sinh ID: ${id} trong lớp`);
        }
    }
}


allStudents.push(
    new Student(1, "An"),
    new Student(2, "Anh"),
    new Student(3, "Ang"),
    new Student(4, "Dung"),
    new Student(5, "Dũng"),
    new Student(6, "Dùng")
);

const classA = new Classroom();
const classB = new Classroom();

classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);

console.log("Lớp A ban đầu");
classA.showStudents();

classA.removeStudent(2);

console.log("Lớp A sau khi xóa ID 2");
classA.showStudents();

console.log("allStudents sau khi xóa");
console.log(allStudents.map(s => `${s.getId()} - ${s.getName()}`));

classA.editStudent(3, "Cường Updated");

console.log("Lớp A sau khi sửa ID 3");
classA.showStudents();

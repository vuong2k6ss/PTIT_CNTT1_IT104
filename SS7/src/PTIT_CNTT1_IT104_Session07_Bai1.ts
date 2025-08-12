class Employee{
    name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string){
        this.name = name;
        this.company = company;
        this.phone =phone;
    }

    printInfo(){
        console.log(`tên: ${this.name}, công ty: ${this.company}, sdt: ${this.phone}`);
    }

}

class Manager extends Employee{
    teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number){
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    printInfo(){
        super.printInfo();
        console.log(`số lượng thành viên trong nhóm: ${this.teamSize}`);
        
    }

}

const manager = new Manager("Nguyen Van A", "S-channel", "012345678", 5);
manager.printInfo();
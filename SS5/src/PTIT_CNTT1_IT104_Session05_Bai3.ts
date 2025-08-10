class Employee {
    name: string;
    protected company: string;
    private phone: string;
    
    constructor(name: string, company: string, phone: string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }    

    printInfo(){
        console.log(`Tên: ${this.name}, Hãng: ${this.company}, std: ${this.phone}`);
    }
}

let employee = new Employee("Vy", "kimettsu", "123456789");
employee.printInfo();
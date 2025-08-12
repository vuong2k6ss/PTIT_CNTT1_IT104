export{}
class Account {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp: +${amount} | Số dư: ${this.balance}`);
        } else {
            console.log("Số tiền nạp phải lớn hơn 0");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
        } else {
            console.log("Không thể rút tiền");
        }
    }

    showHistory(): void {
        console.log(`Lịch sử giao dịch của TK ${this.accountNumber}:`);
        this.history.forEach(h => console.log(h));
    }
}

class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(accountNumber: string, initialBalance: number, overdraftLimit: number) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        if (amount > 0 && (this.balance - amount) >= -this.overdraftLimit) {
            this.balance -= amount;
            this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
        } else {
            console.log("Vượt quá hạn mức thấu chi!");
        }
    }
}

const acc1 = new CheckingAccount("987654", 1000, 500);

acc1.deposit(300);
acc1.withdraw(1100); 
acc1.withdraw(800); 
acc1.showHistory();

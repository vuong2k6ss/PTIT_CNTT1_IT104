class Accountss {
    public accountNumber: string;
    protected balance: number;
    protected history: string[] = [];
    protected status: string;

    constructor(accountNumber: string, balance = 0, status = "active") {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.status = status;
    }

    deposit(amount: number) {
        if (amount <= 0) {
            console.log("Số tiền nạp phải lớn hơn 0");
            return;
        }
        this.balance += amount;
        this.history.push(`Nạp: +${amount} | Số dư: ${this.balance}`);
        console.log(`Nạp thành công ${amount}. Số dư hiện tại: ${this.balance}`);
    }

    withdraw(amount: number) {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Không đủ tiền để rút");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
        console.log(`Rút thành công ${amount}. Số dư hiện tại: ${this.balance}`);
    }

    showHistory() {
        console.log("Lịch sử giao dịch:");
        if (this.history.length === 0) {
            console.log("Chưa có giao dịch nào");
        } else {
            this.history.forEach((h, i) => console.log(`${i + 1}. ${h}`));
        }
    }
}

class SavingAccount extends Accountss {
    interestRate: number;

    constructor(accountNumber: string, balance: number, status: string, interestRate: number) {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }

    withdraw(amount: number) {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Không thể rút quá số dư hiện tại");
            return;
        }
        // Cho phép rút đến khi số dư = 0
        this.balance -= amount;
        this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
        console.log(`Rút thành công ${amount}. Số dư hiện tại: ${this.balance}`);
    }
}

const savingAcc = new SavingAccount("123456789", 5000, "active", 3.5);

savingAcc.deposit(2000);  
savingAcc.withdraw(1000);  
savingAcc.withdraw(8000); 
savingAcc.withdraw(6000);  
savingAcc.showHistory();  

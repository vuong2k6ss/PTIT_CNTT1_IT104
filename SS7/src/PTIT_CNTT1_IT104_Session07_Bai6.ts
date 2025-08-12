class Accounts {
    id: string;
    userName: string;
    private password: string;
    isLogin: boolean;
    role: string;

    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }

    protected checkPassword(pass: string): boolean {
        return this.password === pass;
    }

    login(pass: string) {
        console.log("Đăng nhập Account");
    }

    logout() {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
    }
}

class userAccs extends Accounts {
    status: string; 

    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string, status: string) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }

    login(pass: string): void {
        if (this.status === "active") {
            if (this.checkPassword(pass)) {
                console.log("Đăng nhập thành công");
                this.isLogin = true;
            } else {
                console.log("Sai mật khẩu");
            }
        } else if (this.status === "banned") {
            console.log("Tài khoản bị khóa");
        }
    }
}

class adminAcc extends Accounts {
    banUser(user: userAccs): void {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị khóa tài khoản`);
    }
}


const user1 = new userAccs("U01", "Nguyen Van A", "123456", false, "user", "active");


const admin1 = new adminAcc("A01", "Admin01", "adminpass", false, "admin");

user1.login("123456"); 

admin1.banUser(user1);

user1.login("123456"); 

class Account {
    id: string;
    userName: string;
    password: string;
    isLogin: boolean;
    role: string;

    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string){
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }

    login(){
        console.log("đăng nhập Account");
    }

    logout(){
        if(this.isLogin){
            console.log("đăng xuất thành công");
            this.isLogin = false;
        }
    }

    
}

class userAcc extends Account{
    status: string;
    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string, status: string){
        super(id, userName, password, isLogin, role);
        this.status = status;
    }

    login(): void {
        if(this.status == "active"){
            console.log("đăng nhập thành công");
            this.isLogin = true;
        }else if(this.status === "banned"){
            console.log("tài khoản bị khóa");
        }
    }
}

const useracc = new userAcc("A1", "Rikkei", "012345", true, "quản lí", "active");
useracc.login();
useracc .logout();
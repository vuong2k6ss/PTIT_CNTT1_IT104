//kiểu dữ liệu aray
const numbers: number[] = [1, 2, 3, 4,];

const char: Array<string> = ["A", "B", "C"];

//kiểu dữ liệu object
//cách 1 
interface User{
    id: number;
    name: string;
    age: number;
};

interface Emmployee extends User{// từ khóa extends là kế thừa thuộc tính
    salary: number;

}

//cách 2
type Student = {
    id: number;
    name: string;
};

//cách 3
const user: {name: string} = {
    name: "Văn Vượng",
}


// kieur union type
const score : number | string | null = 10;


//khai báo kiểu Alias
const point : {x: number; y:number} = {
    x: 10,
    y: 20,
}

//kiểu intersection type
type Dog = {
    make: string
};

type Cat = {
    id: number;
    name: string;
};

type Animal = Dog&Cat;

// const animal: Animal = {
    
// }



// kiểu type guard
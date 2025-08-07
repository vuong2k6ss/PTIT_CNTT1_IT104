interface Students {
    name: string;
    age: number;
    email: string;
};

const student1: Students ={
    name: "An",
    age: 20,
    email: "ahahah@gmail.com",
};
function SinhVien(SinhVien: Students): void {
    console.log(`tên tôi là ${SinhVien.name}, tôi ${SinhVien.age} tuổi , email của tôi là ${SinhVien.email} `);
}


SinhVien(student1);
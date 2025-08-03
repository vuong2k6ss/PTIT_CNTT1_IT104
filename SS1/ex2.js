const a = 5;
const arr = [1,2,3,4,5];

arr.push(a);
arr.push(a);
a = 10 // Gây lỗi const không cho phép gán lại giá trị mới cho biến đã khai báo.
console.log("Giá trị a:", a);
console.log("Mảng arr:", arr);
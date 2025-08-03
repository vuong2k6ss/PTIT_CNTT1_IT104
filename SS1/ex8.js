function insertArray(arr1, arr2, pos) {
    if (pos < 0 || pos > arr1.length) {
        console.log("Vị trí chèn không hợp lệ!");
        return;
    }

    const result = [...arr1.slice(0, pos), ...arr2, ...arr1.slice(pos)
    ];

    console.log("Mảng sau khi chèn:", result);
}


const a = [1, 2, 3, 4, 5];
const b = [10, 20, 30];
const pos = 2;

insertArray(a, b, pos);
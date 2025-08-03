let a = [2, 4, 6, 4, 8];
let b = [3, 5, 7, 9, 10];

let c = a.concat(b)
console.log(c.sort((a, b) => a - b))
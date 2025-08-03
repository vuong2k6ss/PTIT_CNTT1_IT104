function SumArray(...arr){
    return arr.map(arr => {
        return arr.reduce((a, b) => a + b);
    });
}

console.log(SumArray([1,2], [6,7,8], [12,8]));
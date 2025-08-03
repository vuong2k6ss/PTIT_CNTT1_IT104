const checkOld = (a) => {
    if (typeof a !== 'number' || isNaN(a)) {
        return "is not a number";
    }
    if (a % 2 === 0) {
        return "is even";
    }
    return "is odd";
}

console.log(checkOld('a'));
console.log(checkOld(4));
console.log(checkOld(5));
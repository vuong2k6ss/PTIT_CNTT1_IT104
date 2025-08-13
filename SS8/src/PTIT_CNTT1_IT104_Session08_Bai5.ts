function findFirstEven<T>(arr: T[]): T | undefined {
    for (const item of arr) {
        if (typeof item === "number" && item % 2 === 0) {
            return item;
        }
    }
    return undefined;
}

console.log(findFirstEven([1, 3, 4, 5]));       
console.log(findFirstEven(["a", "b", 6, 9]));    
console.log(findFirstEven(["a", "b", "c"]));   
const sum = (num1 : number | string, num2 : number | string) => {
    if(Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))){
        return `Giá trị không hợp lệ`;
    }else{
        return Number(num1) + Number(num2);
    }
}

const subtracts = (num1 : number | string, num2 : number | string) => {
    if(Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))){
        return `Giá trị không hợp lệ`;
    }else{
        return Number(num1) - Number(num2);
    }
}

const multi = (num1 : number | string, num2 : number | string) => {
    if(Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))){
        return `Giá trị không hợp lệ`;
    }else{
        return Number(num1) * Number(num2);
    }
}

const divides = (num1 : number | string, num2 : number | string) => {
    if(Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))){
        return `Giá trị không hợp lệ`;
    }else{
        return Number(num1) / Number(num2);
    }
}


console.log("Sum: ",sum(12, "ab"));
console.log("Sum: ",sum(8, "10"));

console.log("\nSubtraction: ", subtracts("abc", 26));
console.log("Subtraction: ", subtracts("30", 26));

console.log("\nMulti: ", multi(2,12));
console.log("Multi: ", multi("15", "a"));

console.log("\nDivide: ", divides(15, 5));
console.log("Divide: ", divides("15", "3"));
console.log("Divide: ", divides("15", "ba"));
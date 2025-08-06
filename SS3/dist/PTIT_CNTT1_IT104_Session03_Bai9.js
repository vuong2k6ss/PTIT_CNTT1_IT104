"use strict";
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0)
        throw new Error("k the chia cho 0");
    return a / b;
};
const power = (base, exponent) => Math.pow(base, exponent);
const sqrt = (base, root) => {
    if (root === 0)
        throw new Error("K the lay can bac hai cua 0");
    return Math.pow(base, 1 / root);
};
const factorial = (n) => {
    if (n < 0)
        throw new Error("K tinh dc giai thua so am");
    let result = 1;
    for (let i = 2; i <= n; i++)
        result *= i;
    return result;
};
const calculate = (op) => {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const resultEl = document.getElementById("result");
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    if (isNaN(num1)) {
        resultEl.innerText = "So thu nhat k hop le";
        return;
    }
    if (op !== "!" && isNaN(num2)) {
        resultEl.innerText = "So thu hai k hop le";
        return;
    }
    try {
        let result;
        switch (op) {
            case "+":
                result = add(num1, num2);
                break;
            case "-":
                result = subtract(num1, num2);
                break;
            case "*":
                result = multiply(num1, num2);
                break;
            case "/":
                result = divide(num1, num2);
                break;
            case "^":
                result = power(num1, num2);
                break;
            case "√":
                result = sqrt(num1, num2);
                break;
            case "!":
                result = factorial(num1);
                break;
            default:
                resultEl.innerText = "Phep tinh k hop le";
                return;
        }
        resultEl.innerText = ` ${result}`;
    }
    catch (error) {
        resultEl.innerText = `Loi: ${error.message}`;
    }
};

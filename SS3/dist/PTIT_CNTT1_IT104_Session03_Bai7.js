"use strict";
let input = "gamehaye";
let output = " ";
for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (!output.includes(element)) {
        output += element;
    }
}
console.log(output);

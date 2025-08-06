"use strict";
//khai báo biến kiểu dữ liệu enum
var SystemMode;
(function (SystemMode) {
    SystemMode["AUTO"] = "AUTO";
    SystemMode["MANUAL"] = "MANUAL";
})(SystemMode || (SystemMode = {}));
const logMovement = (direction) => {
    return `Moving ${direction}`;
};
const setMode = (systemMode) => {
    return `System set to ${systemMode}`;
};
const processInput = (input) => {
    if (typeof input === "string") {
        console.log(`Input lenght ${input.length}`);
    }
    else {
        console.log("Input: ", input);
    }
};
const validateInput = (input) => {
};
//gọi hàm
logMovement("left");
logMovement("right");
setMode(SystemMode.AUTO);
processInput(10);

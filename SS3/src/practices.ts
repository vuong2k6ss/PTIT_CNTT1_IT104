//khai báo biến kiểu dữ liệu enum
enum SystemMode {
    AUTO = "AUTO", // tự động
    MANUAL = "MANUAL",//thủ công
}

type Direction = "left" | "right" | "forward" | "backward";

const logMovement = (direction: Direction): String => {
    return `Moving ${direction}`;
}


const setMode = (systemMode: SystemMode): string => {
    return `System set to ${systemMode}`;
}


const processInput = (input: any): any => {
    if(typeof input === "string"){
        console.log(`Input lenght ${input.length}`);
    }else{
        console.log("Input: ", input);   
    }
};


const validateInput = (input: unknown) => {
    
}


//gọi hàm
logMovement("left");
logMovement("right");

setMode(SystemMode.AUTO);

processInput(10);
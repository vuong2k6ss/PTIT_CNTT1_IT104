function mergeObject<T, U>(value1: T, value2: U): T & U{
    return {...value1, ...value2};
}

const Dog = {name: "husky", sound: "gâu gâu"};
const Cat = { tên: "anna", tiếng: "meo meo"};

console.log(mergeObject(Dog, Cat));

function checkElement(arr, value) {
  return arr.includes(value);
}

console.log(checkElement([1, 2, 3, 4, 5], 3)); // true
console.log(checkElement([1, 2, 3, 4, 5], 6)); // false

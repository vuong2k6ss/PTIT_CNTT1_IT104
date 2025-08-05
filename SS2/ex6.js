function checkEndString(longStr, shortStr) {
  return longStr.endsWith(shortStr);
}

console.log(checkEndString("Hello, World!", "Hello"));   // false
console.log(checkEndString("Hi there!", "there!"));      // true

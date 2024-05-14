let str = "hello";
let hasUppercase = str.split('').some(char => char.toUpperCase() !== char.toLowerCase());
console.log(hasUppercase); 
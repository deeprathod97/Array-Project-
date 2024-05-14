let str = "banana";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let allVowels = str.split('').every(char => vowels.includes(char));
console.log(allVowels); 
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "aba" --> false
// "moOse" --> false (ignore letter case)

let isIsogram = str => str.toLowerCase().split('').every((item, i) => str.indexOf(item) === i);
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
console.log(isIsogram('mouse'));

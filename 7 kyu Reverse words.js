// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
const str = 'This is an example!';
const str2 = 'double  spaces';

// const reverseWord = (str) => {
//     let res = '';
//     const words = str.split(' ');

//     words.forEach(word => {
//         res += word.split('').reverse().join('') + " ";
//     });

//     return res.trim();
// };

const reverseWord = str => str.split(' ').map(word => word.split('').reverse().join('')).join(' ');


console.log(reverseWord(str));
console.log(reverseWord(str2));
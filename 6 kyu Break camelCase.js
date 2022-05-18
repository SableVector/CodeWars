// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(str) {
    const arr = str.split('');
    const strUpperCase = str.toUpperCase().split('');

    return arr
        .map((item, i) => item !== strUpperCase[i] ? item : ` ${item}`)
        .join('');
};

console.log(solution('camelCasing')); // 'camel Casing'
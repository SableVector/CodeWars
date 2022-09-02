// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    const ALPHABET_ARR = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const strArr = str.split('');
    let result = '';

    for (let i = ALPHABET_ARR.indexOf(strArr[0]); i < ALPHABET_ARR.length; i++) {
        if (ALPHABET_ARR[i] !== strArr[i - ALPHABET_ARR.indexOf(strArr[0])]) {
            result = ALPHABET_ARR[i];
            break;
        } else {
            result = undefined;
        }
    }
    
    return result;
}

console.log(fearNotLetter("abce")); //d
console.log(fearNotLetter("stvwx")); //u
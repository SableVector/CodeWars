// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    const ARR_EN = ['a', 'e', 'i', 'o', 'u'];
    let array = str.split('');
    let result = [];

    if (ARR_EN.some(item => item === str[0])) return result = array.join('') + 'way';

    for (let i = 0; i < str.length; i++) {
        const litter = array[i];

        if (ARR_EN.indexOf(litter) === -1) {
            result.push(litter);
        } else {
            result.unshift(array.splice(i));
            break;
        }
    }

    result = result.join('') + 'ay';
    result = result.split(',').join('');

    return result;

}

console.log(translatePigLatin("california")); // the string aliforniacay.
console.log(translatePigLatin("paragraphs")); // the string aragraphspay.
console.log(translatePigLatin("glove")); // the string oveglay.
console.log(translatePigLatin("algorithm")); // the string algorithmway.
console.log(translatePigLatin("eight")); // the string eightway.
console.log(translatePigLatin("rhythm")); // rhythmay.
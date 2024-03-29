// DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided 
// string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    return str.split('').reduce((acc, item) => {
        switch (item) {
            case 'A':
                acc.push(["A", 'T']);
                break;
            case 'T':
                acc.push(['T', 'A']);
                break;
            case 'C':
                acc.push(['C', 'G']);
                break;
            case 'G':
                acc.push(['G', 'C']);
                break;
        }

        return acc;
    }, []);
}

console.log(pairElement("ATCGA"));// [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]].
console.log(pairElement("TTGAG"));// [["T", "A"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]].
console.log(pairElement("CTCTA"));// [["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]].
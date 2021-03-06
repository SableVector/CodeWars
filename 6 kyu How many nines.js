// Ask a mathematician: "What proportion of natural numbers contain at least one digit 9 somewhere in their decimal representation?"

// You might get the answer "Almost all of them", or "100%".

// Clearly though, not all whole numbers contain a 9.

// In this kata we ask the question: "How many Integers in the range [0..n] contain at least one 9 in their decimal representation?"

// In other words, write the function:

// nines :: BigInt => BigInt
// Where, for example:

// nines(1n)  = 0n
// nines(10n) = 1n     // 9
// nines(90n) = 10n    // 9, 19, 29, 39, 49, 59, 69, 79, 89, 90
// When designing your solution keep in mind that your function will be tested against some large numbers (up to 10^38)
const nines = (n) => {
    let result = BigInt(0);

    for (let i = 0; i <= n; i++) {
        i.toString().match(/9/) ? BigInt(result++) : result;
    }

    console.log(result);
    return result;
};

nines(BigInt(100));
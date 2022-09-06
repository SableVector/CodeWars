// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
    let result;
    let array = [];

    function numbersArray(arr) {
        let sortArr = arr.sort((a, b) => a - b);

        for (let i = sortArr[0]; i <= sortArr[1]; i++) {
            array.push(i);
        }
    };
    numbersArray(arr);

    for (let i = 1; array.length; i++) {
        if (array.every(item => i % item === 0)) {
            result = i;
            break;
        }
    }


    return result;
}

console.log(smallestCommons([1, 5])) //60.
console.log(smallestCommons([2, 10])) //2520.
console.log(smallestCommons([1, 13])) //360360.
console.log(smallestCommons([23, 18])) //6056820.
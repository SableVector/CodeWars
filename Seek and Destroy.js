// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr, ...arg) {
    let result = [];

    arr.forEach(item => {
        arg.indexOf(item) === -1 ? result.push(item) : null;
    });

    return result;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // [1, 5, 1].
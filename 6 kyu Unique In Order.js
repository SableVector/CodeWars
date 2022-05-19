// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and
//  preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = (iterable) => {
    const arr = typeof iterable === 'string' ? iterable.split('') : iterable;

    return arr.reduce((acc, item, i) => {
        arr[i - 1] !== item ? acc.push(item) : acc;
        return acc;
    }, []);

};

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A','B','C','D','A','B']
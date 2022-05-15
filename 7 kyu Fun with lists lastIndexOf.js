// Implement the method lastIndexOf (last_index_of in PHP and Python), which accepts a linked list (head) and a value, and returns the index (zero based) of 
// the last occurrence of that value if exists, or -1 otherwise.

// For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, lastIndexOf / last_index_of should return 3.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null/None and can hold any type of value.

// Good luck!

function lastIndexOf(head, value) {
    if (!head || !value) return -1;
    if (!head.length) return 1;

    let res;

    for (let i = 0; i < head.length; i++) {
        if (head[i] === value) {
            res = i;
        }
    }

    return res;
}

console.log(lastIndexOf(null, 17));                     // -1
console.log(lastIndexOf([1, 2, 3], 2));                 // 1
console.log(lastIndexOf(['aaa', 'b', 'abc'], 'aaa'));   // 0
console.log(lastIndexOf([17, "17", 1.2], 17));          // 0
console.log(lastIndexOf([17, '17', 1.2], "17"));        // 1
console.log(lastIndexOf([1, 2, 3, 3], 3));              // 3
console.log(lastIndexOf([], 3));                        // 1

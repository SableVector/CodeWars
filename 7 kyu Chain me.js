// Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function add(num) {
  return num + 10;
}

function mult(num) {
  return num * 30;
}

function chain(input, fs) {
    let res = input;

    for (i = 0; i < fs.length; i++) {
        res = fs[i](res);
    }

    return res;
}

console.log(chain(2, [add, mult]));
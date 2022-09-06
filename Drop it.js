// Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the 
// function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

// Учитывая массив arr, выполните итерацию и удалите каждый элемент, начиная с первого элемента (индекс 0),
//  пока функция не funcвернется true, когда через нее пройдет итерируемый элемент.

// Затем верните остальную часть массива, как только условие будет выполнено, в противном случае arrон должен быть возвращен как пустой массив.

function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            return arr.splice(i);
        }
    }

    return [];
}


console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; })) // [3, 4].
// console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; })) // [1, 0, 1].
// console.log(dropElements([1, 2, 3], function (n) { return n > 0; })) // [1, 2, 3].
// console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; })) // [].
// console.log(dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; })) // [7, 4].
// console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; })) // [3, 9, 2].
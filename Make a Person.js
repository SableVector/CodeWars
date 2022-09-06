// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one
// argument and it has to be a string. These methods must be the only available means of interacting with the object.

const Person = function (firstAndLast) {
    // Only change code below this line
    let name = firstAndLast;

    this.getFirstName = function () {
        return name.split(' ')[0];
    };
    this.getLastName = function () {
        return name.split(' ')[1];
    };
    this.getFullName = function () {
        return firstAndLast = name;
    }
    this.setFirstName = function (first) {
        name = `${first} ${name.split(' ')[1]}`;
    };
    this.setLastName = function (last) {
        name = `${name.split(' ')[0]} ${last}`;
    };
    this.setFullName = function (firstAndLastt) {
        name = firstAndLastt;
    };
    // Complete the method below and implement the others similarly

    return firstAndLast;
};

const bob = new Person('Bob Ross');

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
bob.setFirstName('Haskell');
console.log(bob.getFullName());
bob.setLastName('Curry');
console.log(bob.getFullName());
bob.setFullName('Haskell Curry');
console.log(bob.getFullName());
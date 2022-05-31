// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

const remove = (str) => {

    return res = str.split(' ').reduce((acc, item) => {
        let count = 0;

        for (let i = 0; i < item.length; i++) {
            if (item[i] === '!') count++;
        }

        if (count !== 1) acc += `${item} `;
        return acc;

    }, '').trim();

};

// remove('Hi!') // Hi
remove('fnyzn! ylbv! tup! pfsfrk htsqz! hbggwx! ece ajrgle') // pfsfrk ece ajrgle
// remove('Hi! Hi! Hi') // Hi
// remove('Hi! Hi!! Hi!') // Hi!!
// remove('Hi! !Hi! Hi!') // !Hi!
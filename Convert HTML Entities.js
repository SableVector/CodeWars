// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/&/)) {
            result += '&amp;';
        } else if (str[i].match(/</)) {
            result += '&lt;';
        } else if (str[i].match(/>/)) {
            result += '&gt;';
        } else if (str[i].match('"')) {
            result += '&quot;';
        } else if (str[i].match("'")) {
            result += '&apos;';
        } else {
            result += str[i];
        }
    }

    return result;
}

console.log(convertHTML("Dolce & Gabbana")); // Dolce &amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML("Sixty > twelve")); // Sixty &gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')); // Stuff in &quot;quotation marks&quot;.
console.log(convertHTML("Schindler's List")); // Schindler&apos;s List.
console.log(convertHTML("<>")); // &lt;&gt;.
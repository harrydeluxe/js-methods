# js-methods
**js-methods** for JavaScript bundles a lot of extensions to the language's core classes to simplify development for the browser or for Node.js. This extensions doesn't depend on any other code or overwrite existing methods.



Usage
-------
#### Browsers

If you need 'string' and 'array' methods, put this lines to your scripts.

```html
<script src="https://raw.github.com/harrydeluxe/js-methods/master/string.min.js"></script>
<script src="https://raw.github.com/harrydeluxe/js-methods/master/array.min.js"></script>
```

#### Node.js

Installation

```javascript
npm install --production js-methods
```

```javascript
require('js-methods'); // Now you have all methods to dispose. Try it!
"javascript".md5(); // 'de9b9ed78d7e2e1dceeffee780e2f919'
```

string.js
-------
Extends string prototype with the following methods: camelize, capitalize, collapseSpaces, format, ltrim, pad, remove, repeat, reverse, rtrim, sprintf, stripTags, trim, truncate

The `string.min.js` is super lightweight (< 1k Gzipped).

#### camelize()
Converts a string separated by dashes and/or underscores into a camelCase equivalent. For instance, 'java-script' would be converted to 'javaScript'.

```javascript
"java-script".camelize(); // "javaScript"
"java_script_methods".camelize(); // "javaScriptMethods"
"java_script-methods".camelize(); // "javaScriptMethods"
```


#### capitalize()
Capitalizes the first letter of a string and downcases all the others.

```javascript
"my name is harry".capitalize(); // "My Name Is Harry"
```


#### collapseSpaces()
Converts all adjacent whitespace characters to a single space.

```javascript
" My   name      is  Harry!   ".collapseSpaces(); // "My name is Harry!"
```


#### format(`substrings`)
Substitute substrings from an array into a format String that includes '%1'-type specifiers

```javascript
"My %0 is %1".format(['name','Harry']); // "My name is Harry"
```


#### ltrim(`String` ch)
Removes leading whitespace.

```javascript
"  My name is Harry!".ltrim(); // "My name is Harry!"
"/this/is/a/path/".ltrim("/"); // "this/is/a/path/"
```


#### pad(`Int` length, `String` ch, `Int` direction)
Pad a string up to a given length. Padding characters are added to the left of the string.

```javascript
"22".pad(4, '#'); // "##22"
"22".pad(4, '#', 1); // "22##"
```


#### remove(`Int` start, `Int` length)
Removes a specified length of characters from a given postion.

```javascript
"JavaScript".remove(4, 6); // "Java"
```


#### repeat(`Int` count, `String` separator)
Returns 'str' repeated 'count' times, optionally placing 'separator' between each repetition

```javascript
"Hello".repeat(5); // "HelloHelloHelloHelloHello"
"Hello".repeat(5,'#'); // "Hello#Hello#Hello#Hello#Hello"
```


#### reverse()
Reverses the characters in the specified string.

```javascript
"Hello".reverse(); // "olleH"
```


#### rtrim(`String` ch)
Removes trailing whitespace.

```javascript
"My name is Harry!   ".rtrim(); // "My name is Harry!"
"/this/is/a/path//".rtrim("/"); // "/this/is/a/path"
```


#### stripTags()
Returns a string with all HTML tags stripped.

```javascript
"<div id='type'>JavaScript</div>".stripTags(); // "JavaScript"
```


#### trim(`String` ch)
Returns a String with with leading and trailing whitespace removed.

```javascript
" My name is Harry!   ".trim(); // "My name is Harry!"
"/this/is/a/path//".trim("/"); // "this/is/a/path"
```


#### truncate(`Number` length, `String` suffix)
Returns a string that is no longer than a certain length.

```javascript
"JavaScript ".truncate(5); // "Ja..."
"JavaScript ".truncate(5, "#"); // "Java#"
```


base64.js
-------
Extends string prototype with the following methods: encodeBase64, decodeBase64

#### encodeBase64()
Encodes a string using Base64.

```javascript
"JavaScript".encodeBase64(); // "SmF2YVNjcmlwdA=="
```


#### decodeBase64()
Decodes a Base64 encoded string to a byte string.

```javascript
"SmF2YVNjcmlwdA==".decodeBase64(); // "JavaScript"
```


md5.js
-------
Extends string prototype with the following method: md5

#### md5()
Returns the md5 hash of the given string.

```javascript
"JavaScript".md5(); // "686155af75a60a0f6e9d80c1f7edd3e9"
```


utf8.js
-------
Extends string prototype with the following method: utf8

#### encodeUTF8()
Encodes a multi-byte string into utf-8 multiple single-byte characters.

```javascript
"Straße".encodeUTF8(); // "StraÃe"
```

#### decodeUTF8()
Decodes a utf-8 encoded string back into multi-byte characters.

```javascript
"StraÃe".decodeUTF8(); // "Straße"
```


char.js
-------
Char extensions convert between characters and decimal Numeric Character References.
Extends string prototype with the following methods: char2dec, dec2char

#### char2dec()
Convert Character to Decimal.

```javascript
"JavaScript".char2dec(); // "&#74;&#97;&#118;&#97;&#83;&#99;&#114;&#105;&#112;&#116;"
```

#### dec2char()
Convert Decimal to Character.

```javascript
"&#74;&#97;&#118;&#97;&#83;&#99;&#114;&#105;&#112;&#116;".dec2char(); // "JavaScript"
```


array.js
-------
Extends array prototype with the following methods: contains, every, exfiltrate, filter, forEach, getRange, inArray, indexOf, insertAt, map, randomize, removeAt, some, unique

#### contains(`Array` elements)
Returns true if every element in 'elements' is in the array.

```javascript
[1, 2, 1, 4, 5, 4].contains([1, 2, 4]); // true
```

#### exfiltrate(`Array` elements)
Returns the array without the elements in 'elements'.

```javascript
[1, 2, 1, 4, 5, 4].exfiltrate([1, 2, 4]); // 5
```


#### every(`Function` fn, `Object` scope)
Tests whether all elements in the array pass the test implemented by the provided function.

```javascript
[22, 72, 16, 99, 254].every(function(element, index, array) {
	return element >= 15;
}); // true

[12, 72, 16, 99, 254].every(function(element, index, array) {
	return element >= 15;
}); // false
```


#### filter(`Function` fn, `Object` scope)
Creates a new array with all elements that pass the test implemented by the provided function.

```javascript
[12, 5, 8, 1, 44].filter(function(element, index, array) {
	return element >= 10;
}); // [12, 44];
```


#### forEach(`Function` fn, `Object` scope)
Executes a provided function once per array element.

```javascript
var stuff = "";
["Java", "Script"].forEach(function(element, index, array) {
	stuff += element;
}); // "JavaScript";
```


#### getRange(`Number` startIndex, `Number` endIndex)
Returns a range of items in this collection.

```javascript
[1, 2, 1, 4, 5, 4].getRange(2, 4); // [1, 4, 5]
```


#### indexOf(`Object` subject, `Number` offset)
Returns the first index at which a given element can be found in the array, or -1 if it is not present.

```javascript
[12, 5, 8, 5, 44].indexOf(5); // 1
[12, 5, 8, 5, 44].indexOf(5, 2); // 3
```


#### inArray(`Object` subject)
Checks if a given subject can be found in the array.

```javascript
[12, 5, 7, 5].inArray(7); // true
[12, 5, 7, 5].inArray(9); // false
```


#### insertAt(`Number` index, `Object` element)
Inserts an item at the specified index in the array

```javascript
['dog', 'cat', 'horse'].insertAt(2, 'mouse'); // ['dog', 'cat', 'mouse', 'horse']
```


#### map(`Function` fn, `Object` scope)
Creates a new array with the results of calling a provided function on every element in this array.

```javascript
["my", "Name", "is", "HARRY"].map(function(element, index, array) {
	return element.toUpperCase();
}); // ["MY", "NAME", "IS", "HARRY"]

[1, 4, 9].map(Math.sqrt); // [1, 2, 3]
```


#### removeAt(`Number` index)
Remove an item from a specified index in the array.

```javascript
['dog', 'cat', 'mouse', 'horse'].removeAt(2); // ['dog', 'cat', 'horse']
```


#### randomize()
Randomize the order of the elements in the Array.

```javascript
[2, 3, 4, 5].randomize(); // ??? [5, 2, 3, 4] randomized result
```


#### some(`Function` fn, `Object` scope)
Tests whether some element in the array passes the test implemented by the provided function.

```javascript
[101, 199, 250, 200].some(function(element, index, array) {
	return element >= 100;
}); // true;

[101, 99, 250, 200].some(function(element, index, array) {
	return element >= 100;
}); // true;
```


#### unique()
Returns a new array that contains all unique elements of this array.

```javascript
[1, 2, 1, 4, 5, 4].unique(); // [1, 2, 4, 5]
```

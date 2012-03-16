JS-methods for JavaScript bundles a lot of extensions to the language's core classes to simplify development for the browser or for Node.js. This extensions doesn't depend on any other code or overwrite existing methods.


Installation
-------
npm install --production js-methods

Usage for Node.js
-------
```javascript
require('js-methods'); // Now you have all methods to dispose. Try it!
"javascript".md5(); // 'de9b9ed78d7e2e1dceeffee780e2f919'
```

string.js methods
-------
Extends string prototype with the following methods: camelize, capitalize, collapseSpaces, format, ltrim, pad, remove, repeat, reverse, rtrim, sprintf, stripTags, trim, truncate

The `string.min.js` is super lightweight (< 1k Gzipped).

### camelize()

Converts a string separated by dashes and/or underscores into a camelCase equivalent. For instance, 'java-script' would be converted to 'javaScript'.

```javascript
"java-script".camelize(); // "javaScript"
"java_script_methods".camelize(); // "javaScriptMethods"
"java_script-methods".camelize(); // "javaScriptMethods"
```


### capitalize() ###

Capitalizes the first letter of a string and downcases all the others.

```javascript
"my name is harry".capitalize(); // "My Name Is Harry"
```


### collapseSpaces() ###

Converts all adjacent whitespace characters to a single space.

```javascript
" My   name      is  Harry!   ".collapseSpaces(); // "My name is Harry!"
```


### format(substrings) ###

Substitute substrings from an array into a format String that includes '%1'-type specifiers

```javascript
"My %0 is %1".format(['name','Harry']); // "My name is Harry"
```


### ltrim(String ch) ###

Removes leading whitespace.

```javascript
"  My name is Harry!".ltrim(); // "My name is Harry!"
"/this/is/a/path/".ltrim("/"); // "this/is/a/path/"
```


### pad(Int length, String ch, Int direction) ###
Pad a string up to a given length. Padding characters are added to the left of the string.

```javascript
"22".pad(4, '#'); // "##22"
"22".pad(4, '#', 1); // "22##"
```


### remove(Int start, Int length) ###
Removes a specified length of characters from a given postion.

```javascript
"JavaScript".remove(4, 6); // "Java"
```


### repeat(Int count, String separator) ###
Returns 'str' repeated 'count' times, optionally placing 'separator' between each repetition

```javascript
"Hello".repeat(5); // "HelloHelloHelloHelloHello"
"Hello".repeat(5,'#'); // "Hello#Hello#Hello#Hello#Hello"
```


### reverse() ###
Reverses the characters in the specified string.

```javascript
"Hello".reverse(); // "olleH"
```


### rtrim(String ch) ###
Removes trailing whitespace.

```javascript
"My name is Harry!   ".rtrim(); // "My name is Harry!"
"/this/is/a/path//".rtrim("/"); // "/this/is/a/path"
```


### stripTags() ###
Returns a string with all HTML tags stripped.

```javascript
"<div id='type'>JavaScript</div>".stripTags(); // "JavaScript"
```


### trim(String ch) ###
Returns a String with with leading and trailing whitespace removed.

```javascript
" My name is Harry!   ".trim(); // "My name is Harry!"
"/this/is/a/path//".trim("/"); // "this/is/a/path"
```


### truncate(Number length, String suffix) ###
Returns a string that is no longer than a certain length.

```javascript
"JavaScript ".truncate(5); // "Ja..."
"JavaScript ".truncate(5, "#"); // "Java#"
```


base64.js methods
-------
Extends string prototype with the following methods: encodeBase64, decodeBase64

### encodeBase64()
Encodes a string using Base64.

```javascript
"JavaScript".encodeBase64(); // "SmF2YVNjcmlwdA=="
```


### decodeBase64()
Decodes a Base64 encoded string to a byte string.

```javascript
"SmF2YVNjcmlwdA==".decodeBase64(); // "JavaScript"
```


md5.js methods
-------
Extends string prototype with the following method: md5

### md5()
Returns the md5 hash of the given string.

```javascript
"JavaScript".md5(); // "686155af75a60a0f6e9d80c1f7edd3e9"
```


utf8.js methods
-------
Extends string prototype with the following method: utf8

### encodeUTF8()
Encodes a multi-byte string into utf-8 multiple single-byte characters.

```javascript
"Straße".encodeUTF8(); // "StraÃe"
```

### decodeUTF8()
Decodes a utf-8 encoded string back into multi-byte characters.

```javascript
"StraÃe".decodeUTF8(); // "Straße"
```





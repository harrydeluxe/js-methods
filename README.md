JS-methods for JavaScript bundles a lot of extensions to the language's core classes to simplify development for the browser or for Node.js. This extensions doesn't depend on any other code or overwrite existing methods.



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


### ltrim() ###

Removes leading whitespace.

```javascript
"  My name is Harry!".ltrim(); // "My name is Harry!"
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


### rtrim() ###
Removes trailing whitespace.

```javascript
"My name is Harry!   ".rtrim(); // "My name is Harry!"
```


### stripTags() ###
Returns a string with all HTML tags stripped.

```javascript
"<div id='type'>JavaScript</div>".stripTags(); // "JavaScript"
```


### trim() ###
Returns a String with with leading and trailing whitespace removed.

```javascript
" My name is Harry!   ".trim(); // "My name is Harry!"
```


### truncate(Number length, String suffix) ###
Returns a string that is no longer than a certain length.

```javascript
"JavaScript ".truncate(5); // "Ja..."
"JavaScript ".truncate(5, "#"); // "Java#"
```
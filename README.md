JS-methods for JavaScript bundles a lot of extensions to the language's core classes to simplify development. This extensions doesn't depend on any other code or overwrite existing methods.



Methods
-------

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


### format(ss) ###

Substitute substrings from an array into a format String that includes '%1'-type specifiers

```javascript
"My %0 is %1".format(['name','Harry']); // "My name is Harry"
```


### ltrim() ###

Removes leading whitespace.

```javascript
"  My name is Harry!".ltrim(); // "My name is Harry!"
```
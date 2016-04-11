# letterset 

> Work with all letters used in latin, european, greek and cyrillic alphabets.

[![Build Status](https://travis-ci.org/radiovisual/letterset.svg?branch=master)](https://travis-ci.org/radiovisual/letterset) [![Coverage Status](https://coveralls.io/repos/github/radiovisual/letterset/badge.svg?branch=master)](https://coveralls.io/github/radiovisual/letterset?branch=master)

**Note:** This is work in progress. Pull requests are welcomed if you would like to help extend the letter range to include any unsupported language(s).


## Install

```
$ npm install --save letterset
```


## Usage Examples

```js
const letterset = require('letterset');
```

#### Check if a character is a letter:

```js
letterset.isLetter('a');
//=> true

letterset.isLetter('?');
//=> false
```

#### Get all supported letter characters in an array:

```js
letterset.allCharacters();
//=> ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z","İ","ı","Ö","ö","Ü","ü","Ç","ç","Ğ","ğ","Ş","ş","Á","á","É","é","Í","í","Ñ","ñ","Ó","ó","Ú","ú","А","а","Б","б","В","в","Г","г","Д","д","Е","е","Ж","ж","З","з","И","и","Й","й","К","к","Л","л","М","м","Н","н","О","о","П","п","Р","р","С","с","Т","т","У","у","Ф","ф","Х","х","Ц","ц","Ч","ч","Ш","ш","Щ","щ","Ъ","ъ","Ы","ы","Ь","ь","Э","э","Ю","ю","Я","я","Ă","ă","Â","â","Î","î","Ș","ș","Ț","ț","Ţ","ţ","Ą","ą","Ę","ę","Ć","ć","Ł","ł","Ń","ń","Ś","ś","Ź","ź","Ż","ż","À","à","Ã","ã","Ä","ä","Å","å","Æ","æ","È","è","Ê","ê","Ë","ë","ƒ","Ì","ì","Ï","ï","Ò","ò","Ô","ô","Õ","õ","Ø","ø","Š","š","ß","Ù","ù","Û","û","Ÿ","ÿ","Ý","ý","Ž","ž","Œ","œ","Ð","Þ","ð","þ","Ē","ē","Ī","ī","Ō","ō","Ū","ū","Α","α","Β","β","Γ","γ","Δ","δ","Ε","ε","Ζ","ζ","Η","η","Θ","θ","Ι","ι","Κ","κ","Λ","λ","Μ","μ","Ν","ν","Ξ","ξ","Ο","ο","Π","π","Ρ","ρ","Σ","σ","ς","Τ","τ","Υ","υ","Φ","φ","Χ","χ","Ψ","ψ","Ω","ω","Ě","ě","Ů","ů","Č","č","ď","ť","Ĺ","ĺ","Ň","ň","Ŕ","ŕ","Ř","ř"]
```

#### Get the Hexadecimal of a character:

```js
letterset.hex('A'); 
//=> 0x41
```

#### Get the Decimal of a character:

```js
letterset.decimal('A');
//=> 65
```

#### Get the name of a character:

```js
letterset.name('Œ');
//=> 'LATIN CAPITAL LIGATURE O');
```

## License

MIT © [Michael Wuergler](http://numetriclabs.com)

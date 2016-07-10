# merge-plus

A highly flexible, more robust, non-destructive deep object merge

- accepts multiple arguments of any type
- automatically extracts objects from array(s) of objects
- due to dynamic type checking of arguments, only applies objects
- non-destructive

<br/>

Now you can go pretty weird without messing up!
```javascript
var merge= require( 'merge-plus' );

// as expected:
var test= merge( {hello: '?'}, { hello: {world: '!'}} );
// { hello: { world: '!' } }

// can mix multiple arrays of objects and objects
var test= merge( [{a:1}, {x: {deep: {deeper: '?'}}}], {mixed: true}, [{c:3}, {x: {deep: {deeper: ':)'}}}] );
console.log( test );
// { a: 1, x: { deep: { deeper: ':)' } }, mixed: true, c: 3 }

// ignores non-object type arguments
var test= merge( 'merge-plus!', [new Date, [null, [{a:1}, {b: 2}, {c:{deep: { deeper: true}}}], 42, [{d:[{huh: '?'}]}], {e: 1}, [], /hello regexp/, {f: 4}]] )
console.log( test );
//	{ a: 1,
//	  b: 2,
//	  c: { deep: { deeper: true } },
//	  d: [ { huh: '?' } ],
//	  e: 1,
//	  f: 4 }
```

# Quick-Bind
A shorthand for Function.prototype.bind() to allow binding without changing the context.

## Usage
Add this line as close to the top of your entry file as possible:

```javascript
require('quick-bind').modifyFunctionPrototype();
```

You can then prefix parameters to functions without needing to specify the context as the first parameter:

```javascript
function threeParameterFunc (a, b, c) {
	console.log(a, b, c);
}

const myFunc = threeParameterFunc._bind('param1', 'param2');
myFunc('param3');  // Outputs "param1 param2 param3"
```

## Don't like ._bind() - then change it
If you'd like to change the name of the function from ._bind() to something else just pass it to "modifyFunctionPrototype()" like:

```javascript
require('quick-bind').modifyFunctionPrototype('args');

const myFunc = threeParameterFunc.args('param1', 'param2');
myFunc('param3');
```
You cannot change the function name to any properties that are already set on Function.prototype. This prevents you from inadvertently overwriting any native methods.

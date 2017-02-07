'use strict';

/*
 * Adds a shorthand bind method to the function prototype so we don't have to specify the contect when it's not needed.
 */
module.exports.modifyFunctionPrototype = function (newBindFuncName = '_bind') {

	if (typeof Function.prototype[newBindFuncName] !== 'undefined') {
		throw new Error('I cannot let you overwrite any native properties of Function.');
	}

	Function.prototype[newBindFuncName] = function quickBind (...args) {
		return this.bind(this, ...args);
	};

};

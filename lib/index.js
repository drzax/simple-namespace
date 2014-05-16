/*globals window */
/*
 * simple-namespace
 * https://github.com/drzax/simple-namespace
 *
 * @version 0.1.1
 * @copyright Simon Elvery
 * @license MIT
 * 
 */

'use strict';

module.exports = function(ns, root) {
  var parts, part, space;
	root = root || window;
	parts = ns.split('.');
	part = parts.shift();
	while (part) {
		space = root[part] || {};
		root = root[part] = space;
		part = parts.shift();
	}
	return space;
};

"use strict"

const sha1 = require('sha1');
const fs = require('fs');
fs.writeFile('Test.txt', sha1("Hello World"));

let x = function test(a, b){
	return a + b
}

let test2 = (a, b) => a + b

console.log(x(1,2))
console.log(test2(1,2))
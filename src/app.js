 var sim = Symbol('abc');
 console.log(sim);

var obj = {};
obj[sim] = 'is';
obj.bar = 'das';
var recoverSym = Object.getOwnPropertySymbols(obj);

console.log(obj);
console.log(recoverSym);

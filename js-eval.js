var atribut1 = 3;
var atribut2 = 10;
var atribut3 = 1000;
var codDeLaNoi = 'return atribut1 + atribut2 + atribut3 + 1;';
var newVal = eval('(atribut1,atribut2, atribut3) => {' + codDeLaNoi + '}')(atribut1, atribut2, atribut3); //returns "4"
console.log(newVal);

























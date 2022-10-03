// //check: https://24ways.org/2005/dont-be-eval/

// console.log('abc')

// function looseJsonParse(obj) {
//     return eval(`(${obj})`);
// }

// console.log(looseJsonParse(
//     "{a:(4-1), b:function(){}, c:new Date()}"
// ))


// //

// let x = 10;
// let y = 20;
// let i = "x * y";
// let e = eval(text);
// console.log(result)


// let text2 = "2 * 3";
// let result2 = eval(text2);
// console.log(result2)


// let text3 = `
// function myFun(a, b){
//     return a + b
// }

// myFun(2,3)
// `

// var result3 = eval(text3);
// console.log(result3)


var atribut1 = 3;
var atribut2 = 10;
var body = 'return atribut1+atribut2+1;';
var newVal = eval('(atribut1,atribut2) => {' + body + '}')(atribut1, atribut2); //returns "4"
console.log(newVal);

























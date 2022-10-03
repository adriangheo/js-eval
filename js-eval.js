//check: https://24ways.org/2005/dont-be-eval/

console.log('abc')

function looseJsonParse(obj) {
    return eval(`(${obj})`);
}

console.log(looseJsonParse(
    "{a:(4-1), b:function(){}, c:new Date()}"
))


//

let x = 10;
let y = 20;
let text = "x * y";
let result = eval(text);
console.log(result)


let text2 = "2 * 3";
let result2 = eval(text2);
console.log(result2)


let text3 = `
function myFun(a, b){
    return a + b
}

myFun(2,3)
`

let result3 = eval(text3);
console.log(result3)


var lim = 3;
var body = 'return lim+1;';
var newVal = eval('(lim) => {' + body + '}')(7); //returns "4"
console.log(newVal);
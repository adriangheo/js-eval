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
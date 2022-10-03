console.log('cba')

function looseJsonParse(obj) {
    return Function(`"use strict";return (${obj})`)();
}

console.log(looseJsonParse(
    "{a:(4-1), b:function(){}, c:new Date()}"
))

//


let x = 10;
let y = 20;
let text = "x * y";
let result = eval(text);
console.log(Function(`return (${result})`))
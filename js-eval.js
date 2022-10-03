console.log('abc')

function looseJsonParse(obj) {
    return eval(`(${obj})`);
}

console.log(looseJsonParse(
    "{a:(4-1), b:function(){}, c:new Date()}"
))
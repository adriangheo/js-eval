console.log('cba')

function looseJsonParse(obj) {
    return Function(`"use strict";return (${obj})`)();
}

console.log(looseJsonParse(
    "{a:(4-1), b:function(){}, c:new Date()}"
))

//


var body = "function( a, b ){ console.log(a, b) }"
var wrap = s => "{ return " + body + " };" //return the block having function expression
var func = new Function( wrap(body) );
func.call( null ).call( null, 1, 2  ); //invoke the function using arguments

// let text3 = (a,b)=>{`
// function myFun(${a}, ${b}){
//     return ${a} + ${b}
// }
// `}

// let result3 = eval(text3(4,5));
// console.log(result3)



var body = `function( a, b ){ console.log(a, b) }`
var wrap = s => "{ return " + body + " };" //return the block having function expression
var func = new Function( wrap(body) );
func.call( null ).call( null, 1, 2  ); //invoke the function using arguments
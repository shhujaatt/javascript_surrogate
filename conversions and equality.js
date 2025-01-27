// == non strict equality auto type coercion


console.log(null == undefined); //true
console.log("0" == 0);    //true
console.log(0 == false);  //true
console.log("0" == false); //true


// === strict equality no type coercion


console.log(null === undefined); //false
console.log("0" === 0);    //false
console.log(0 === false);  //false
console.log("0" === false); //false


//no coercion to bools


console.log(null == false); //false
console.log(undefined == false); //false



//NaN 


console.log(NaN == NaN); //false







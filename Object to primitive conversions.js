// Object to Boolean

console.log(Boolean(new Boolean(false)));   //true
console.log(Boolean({}));    //true
console.log(Boolean([])); //true


//Object to String conversion

console.log({x:1, y: 2}.toString());
console.log([1, 2, 3 , 4].toString());
console.log(new Date().toString());


//Object to number 

console.log(Number({}));
console.log(Number([1,2,3]));

console.log(Number(new Date()));

//valueOf()
console.log({x: 1, y: 2}.valueOf());
console.log([1,2].valueOf());

console.log(typeof new String("Hello").valueOf());
console.log(typeof new Number(43).valueOf());
console.log(typeof new Date().valueOf());

const obj = {x: 1, y: 2, z: 3};
console.log(typeof obj.valueOf());
console.log( obj.toString());
console.log(Number(obj));


console.log(typeof String(obj));


const date = new Date(2025, 0, 1)
console.log(Number(date));
console.log(String({ x: 1, y: 2 }))

//Array to Number
var arr = [1,2,3,4];
console.log(typeof arr.valueOf());

console.log(Number([]));

const arr2 = [1,2,3,4];
console.log(arr2 + 1);


const now = new Date();

console.log(now  + 1);


const today = new Date();

console.log(today == today.toString());   //true



















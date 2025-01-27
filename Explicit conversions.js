Number("3"); // number3
String(false); // 'false' String
Boolean([]); //true 
Object(4); //object 4  (prmitive number to object)
// toString() method.
var num = 42;
console.log(num.toString()); //String
// null and undefined
console.log(Object(null)); // {}
console.log(Object(undefined)); // {}
//String()
String(123); //"123"
String(true); // 'true'
String([1, 2, 3]) // '1, 2, 3'
String(null) // 'null'
String(undefined) // 'undefined'
//Number()
Number("123");   // 123
Number(true);      //1
Number("hello")  //NaN
Number(false);  //0
Number(""); // 0
//Boolean()
Boolean(1);  //true
Boolean(0); //false
Boolean(""); //false
Boolean("true"); //true
Boolean({}); //true
Boolean([]); //true
//Object()
Object(1); // {1}
Object("hello"); // {hello}
Object(true); // {true}
Object(null); // {}
Object(undefined); //{}
//Implicit Coercion
"5" + 1; //51
"5" - 1; //4
//Explicit
Number("5") + 1; //6
//unary plus
"5" + 3; //concatenation.
5 + true; // 6
"5" + true; //5true
+"42" //42
+true // 1
+false // 0
+"hello" //NaN
// ! unary not operator
!0; //true
!!0; //false
!!"hello"; //true
!!null; //false
//
var x = 42;
x + "";  //'42'
var str = "123";
+str; //123
var y = "hello";
!!y; //true
//Number formatting
var n = 36;
console.log(n.toString(10));
console.log(n.toString(2)); //binary
console.log(n.toString(8)); //octal
console.log(n.toString(16)); //hexa
//Parsing Strings to numbers
parseInt("42");
parseInt("101", 2); 
parseInt("ff", 16);
parseInt("3.14");
parseInt("abc"); //NaN
//parse float
parseFloat("3");
console.log(parseFloat("3.8"));
//toFixed(digits)
var w = 1234.45678;
console.log(w.toFixed(0));
console.log(w.toFixed(9));
//toExponential(digits)
console.log(w.toExponential(1));
console.log(w.toExponential(5));

//toPrecision(digits)






















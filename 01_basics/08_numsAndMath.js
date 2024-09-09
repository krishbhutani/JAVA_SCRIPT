//Normal Declaration of Number
const num = 100;
console.log(num);         //Output => 100

//Define Explicitly => Its convert to object type =>we also use Prototypes
const num2 = new Number(100.8475);
console.log(num2);        //Output => [Number: 100]

//Converting Number to String
console.log(num2.toString());

//Precise to fixed digits
console.log(num2.toFixed(2));

//Toatl digits in number after precesion
let num3 = 5754.5734;
console.log(num3.toPrecision(5))  // It convert answer to String

//Converting Indian System
let num4 = 10000000
console.log(num4.toLocaleString('en-IN'));


// -------------------Maths -------------------
console.log('-------------------Maths -------------------');

console.log(Math.abs(-234));   //Absolute Value
console.log(Math.round(4.25)); //Round Off
console.log(Math.ceil(4.25));
console.log(Math.floor(4.25));
console.log(Math.min(3,5,6,3,5,6));

console.log(Math.random());  //Its value is from 0-1
console.log(Math.floor(Math.random()*10) + 10);  //Its value is from 10-20

//General Formula
let min = 400
let max = 700
console.log(Math.floor(Math.random()*(max-min +1) + min))
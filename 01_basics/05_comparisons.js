// Comparing Different Data Types is Unpedictable.

// console.log("2">1)
// console.log("233">2333)

// Some Conversions to Learn
console.log(null > 0);       //false
console.log(null < 0);      //false
console.log(null == 0);     //false
console.log(null >= 0);     //True
console.log(null <= 0);     //True
console.log(null === 0);     //false


//This type of conversions with undefined is always undefined.
console.log(undefined > 0);
console.log(undefined === 0);
console.log(undefined >= 0);
console.log(undefined <= 0);


/**
 * There is a strict conversion ===
 * this properly check data type of variables.
 */
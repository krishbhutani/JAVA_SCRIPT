// Primitive : They are of 7 types

/**
 * String
 * Number
 * Boolean
 * null
 * undefined
 * symbol
 * bigint
 */

// Reference (Non Primitive)
// Array , Objects , Functions


// NOTE :- Java Scirpt is Dynamically Type because we not need to declare data type of variables.

// Symbol Data Type:
/**
 * This data type is used to give unique id even if they are looking 
 * same.
 */

const id = Symbol("123")
const id2 = Symbol("123")

console.log(id===id2)    // False
console.table([id , id2])


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object           // Important
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/
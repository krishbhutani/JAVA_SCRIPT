const name = "Krish"
const repoCount = 50

// console.log("My name is " + name + " and my repo count is " + repoCount)    -----> This is a not a good method

// Modern Method to concate 
console.log(`My name is ${name} and my repo Count is ${repoCount}`)

//One more method to declare string
const gameName = new String("Krish")
console.log(gameName[1])   // String is key value pair

//One method to access prototype
console.log(gameName.__proto__)  //Without this we also use prototype


// *******************Methods of String *****************

// 1. Length of String
console.log(`Length of String is ${gameName.length}`);

// 2. Upper Case Conversion
console.log(`Upper case to String is ${gameName.toUpperCase()}`);

// 3. Lower Case Conversion
console.log(`Lower case to String is ${gameName.toLowerCase()}`);

// 4. Finding Character at given index
console.log(`Loaction of character at index 2 is ${gameName.charAt(2)}`);

// 5. Finding Index of given Character
console.log(`Index of character k is ${gameName.indexOf('K')}`)

// 6. Substring
console.log(`Substring is ${gameName.substring(0,3)}`)

// 7. Slicing
console.log(`Substring is ${gameName.slice(-4,3)}`)  // We use negative index

// 8. Trim
const demo = "          hello          "
console.log(`String after trim is ${demo.trim()}`)

// 9. Replace
const url = "https://krish.com/krish%20bhutani"
console.log(`Url after replacement is ${url.replace("%20","-")}`);

// 10. Includes
console.log(`Krish is present in url : ${url.includes("krish")}`)

// 11. Split
console.log(`Split the string ${url.split("%")}`)
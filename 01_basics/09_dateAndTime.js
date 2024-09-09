// Dates

//Current Date
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));                  //Object

//Own date
let OwnDate = new Date(2023 , 0 , 21);  //(year,month ,date)
console.log(OwnDate.toDateString());


//TIME STAMP 
let timeStamp = Date.now();  //Returns the number of milliseconds elapsed since 
                              //midnight, January 1, 1970

console.log(timeStamp);

//Of any custom Date
console.log(OwnDate.getTime());
console.log(OwnDate.getDate());
console.log(OwnDate.getMonth() + 1);
console.log(OwnDate.getHours());

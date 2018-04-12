// Arrays can store multiple data type like number and string .
//For example 
var salman = ["khan", 1965, "india"];
// Dont forget that arrays are index based means 1 value will start fro 0;
// So if you want to access the 1 no u must mention its index;
console.log(salman[1]);
// We can apply multiple method on arrays like push(); which is used to add element at the end of an array; 
salman.push("aslam");
console.log (salman);
//unshift method is used to add element at the start of an array;
salman.unshift("karim");
//shift removes the first element of an array;
salman.shift();
//Pop method is used to remove last element of an array;
salman.pop();
console.log(salman);
// indexOf(); method is to figures out the index of the element;
console.log(salman.indexOf("india"));

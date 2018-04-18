// Passing arguments as functions
var years = [1990,2002,1958,2005];
function calcArray(arr,fn){
  var result=[];
  for (var i=0; i<arr.length;i++){
    result.push(fn(arr[i]));
  }
  return result;
}
function calcAge(el){
  return 2018 - el;
}
function isFullAge(el){
  return el>=18;
  
}
 
var ages = calcArray(years,calcAge);
console.log(ages);

var fullAges =calcArray(ages,isFullAge);
console.log(fullAges);


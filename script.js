/*
function help us to avoid repeatation of code .Once the function is written we can call it easily;
*/
//function to calculate age;
function calculate_age(birthyear){
var age =  2018- birthyear;
return age;
}
calculate_age(1990);
// Once we have created the function we do not need to write code again we simply call it 
var karim = calculate_age(1955);
console.log(karim);
// function can called on other function too.
function retirement_duration(name,year){
  age = calculate_age(year);
  time_remian = 60 - age; 
   if(time_remian >=0 ){
     console.log(name + " is going to retire in " + time_remian + " years");
   }
 else{
   console.log(name + " has already retired");
 }

  }
retirement_duration("salim",1980)
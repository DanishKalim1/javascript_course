//Coding challange 2 .In this function i made a program to check who is adult.  
function adult_list(birth_year){
var adult = [];
var check_adult = [];
for(var i = 0; i <birth_year.length; i++){
  check_adult[i] = 2018 - birth_year[i];
}
for(i=0; i <check_adult.length; i++ ){
  if(check_adult[i]>18){
    console.log("This person is " +check_adult[i] +" years old and He is adult ");
    adult.push(true);
  }
  else{
    console.log("This person is " +check_adult[i] +" years old and He is Not adult ");
    adult.push(false);
  }
 
}
 return adult;
}
var birth_year = [2002,1990,2012,1945,2002];
adult_list(birth_year);
adult_list([2002,1945,1923]);

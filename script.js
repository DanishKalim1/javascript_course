// Following code shows the comparison between two players with higher score.
/*var aslamAge =35;
var salimAge=50;
var salimHeight= 150;
var aslamHeight = 200;
var aslamScore = aslamHeight + 5  * aslamAge ;
var salimScore = salimHeight + 5  * salimAge;
  if(aslamScore > salimScore){
    console.log('Aslam has won with '+ aslamScore + " points");
    }
else if(salimScore>aslamScore){
  console.log('Salim has won with '+  salimScore + " points");
}
else{
  console.log("Tie")
}*/
//Following code compares the higher score of more than two players.
var sohailAge=40;
var aslamAge=35;
var salimAge=50;
var salimHeight= 150;
var aslamHeight = 200;
var sohailHeight = 500;
var sohailScore= sohailHeight + 5 * sohailHeight;
var aslamScore = aslamHeight + 5  * aslamAge ;
var salimScore = salimHeight + 5  * salimAge;
  if(aslamScore > salimScore  && aslamScore > sohailScore){
    console.log('Aslam has won with '+ aslamScore + " points");
    }
else if(salimScore > aslamScore && salimScore > sohailScore){
  console.log('Salim has won with '+  salimScore + " points");
}
else if(sohailScore > aslamScore && sohailScore > salimScore){
  console.log('sohail has won with '+  sohailScore + " points");
}
else{
  console.log("Tie");}
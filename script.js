//objects have ability to store key and its value;
var driver ={
  name:"aslam",
  location:"karachi",
  number:03332456877,
  profession:"driver"
  }
  // we can easily check the key and values of the objects.
  console.log(driver);
  //We can aslo check the spacific key and its value with dot notation,
  console.log(driver.profession);
  //another way to check the key and its value is bracket notation.
  console.log(driver['number']);
  //We can aslo change the objects values
  driver.name = "sabir";
  driver['location'] = "hyderabad";
  console.log(driver);
  //Another way creating an object 
  var salim = new Object();
  salim.cast = "khan";
  salim.father ="sanaullah";
  salim['location']= "nawabshah";
  console.log(salim);
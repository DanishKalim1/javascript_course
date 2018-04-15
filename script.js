
var cities = ["khi","isl","lhr","hyd","mirpur"];
//for loop
for(var i = 0;i<cities.length;i++){
  console.log(cities[i]);
  }
  
  //reverse loop
  for(var i=cities.length; i>=0; i--){
  
   console.log(cities[i]);
  
}

//while loop
i =0;
while(i<cities.length){
  console.log(cities[i]);
  i++;
  }
//break loop

for(i=0;i<=8;i++){
  console.log(i);
  if(i === 4){
    break;
  }
  
}
//continue
for(i=0;i<=8;i++){
  
  if(i === 4){
    continue;
  }
  console.log(i);
}


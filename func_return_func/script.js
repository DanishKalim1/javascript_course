//function returning functions
function exam(job){
  if (job === "driver"){
    return function(name){
      console.log(name + " Do you have licience");
    }
    
   }
   else if (job === "cook"){
      return function(name){
      console.log(name + " Do you work in hotel or house");
    }
   }
    else if (job === "teacher"){
      return function(name){
      console.log(name +  " what do you teach");
    }
   }
      
 }
 var sawal=exam("cook");
 sawal("salim");
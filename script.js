/*var worker = {
  name:"faisal",
  profession:"landlord",
  number:03214568,
  birth_year:1990,
  family:["majeed","yasir","husnain"],
  calAge : function(birth_year){
    return   2018 - birth_year;
  }
  
  };
 
  console.log(worker.calAge(1986));
  console.log(worker);*/
//This keyword refers to the current object here worker.birth_year = this.birth_year

var worker = {
  name:"faisal",
  profession:"landlord",
  number:03214568,
  birth_year:1990,
  family:["majeed","yasir","husnain"],
  calAge : function(){
    this.age = 2018 - this.birth_year;
  }
  };
 console.log(worker.calAge());
 console.log(worker);

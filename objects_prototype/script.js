// objects .functions , prototype
var Person = function(name,job,birth){
  this.name = name;
  this.job= job;
  this.birth=birth;
  }
  var akram = new Person("akram","actor",1990);
  console.log(akram);
  Person.prototype.lastName="salim";
  
  
  Person.prototype.age= function(){
    console.log(2018-this.birth);
    
  }
  
akram.age();


  
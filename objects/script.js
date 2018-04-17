// undertsnding Object part 1
var car = {
name:"",
engine:"",
speed:"",
color:"",
model:0,
describe: function(){
  var description = "This "+this.name+" car has " +this.engine+" engine with the "+this.speed+" speed with "+this.color+ " color and has "+this.model+" model.";
  return description;
}
  
}

var toyota = Object.create(car);
toyota.engine="900cc";
toyota.speed="500kmh";
toyota.color="blue";
toyota.name="toyota";
toyota.model=2018;


var mehran = Object.create(car);
mehran.engine="800cc",
mehran.speed="200kmp",
mehran.name="Mehan",
mehran.model=2017,
mehran.color="white";



console.log(toyota.describe());
console.log(mehran.describe());
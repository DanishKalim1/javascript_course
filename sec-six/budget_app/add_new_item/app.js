//Budget controller

var budgetController = (function(){
  // Made expense and income functions to calculate Data
  var Expense = function(id,description,value){
      this.id = id;
      this.description = description;
      this.value = value;
};

 var Income = function(id,description,value){
    this.id = id;
    this.description = description;
    this.value = value;

};

var data = {
    allItems:{
      exp:[],
      inc:[]
},

     totals:{
      exp:0,
      inc:0
}

};
return {
  addItem: function(type,des,val){
  var newItem, ID;
  // Create new ID 
if (data.allItems[type].length > 0 ){

  ID = data.allItems[type][data.allItems[type].length -1].id + 1;
}
else {

  ID = 0;

}

  
  // Create new Item based on "inc" or "exp" type
  if (type === 'exp') {
    newItem = new Expense(ID,des,val);
  }
  else if(type === "inc"){
    newItem = new Income(ID,des,val);
  }
  // Push it into Data structure
  data.allItems[type].push(newItem);
  // Return element
  return newItem;


  },
testing:function(){
  console.log(data);
}



};

})();

// UI controller
var UIController = (function(){
    var DOMstrings = {
      inputType:'.add__type',
      inputDescription: '.add__description',
      inputValue:'.add__value',
      inputBtn: '.add__btn',

}
     return {
      getInput: function(){
        return {
             // getting input data from elements
              type: document.querySelector(DOMstrings.inputType).value,
              description: document.querySelector(DOMstrings.inputDescription).value,
              value: document.querySelector(DOMstrings.inputValue).value

         };
        
      },
      // exposing to public so that we can excess DOMstrings
      getDOMstrings: function(){
        return DOMstrings;
      }

  };
})();

// Global App controller.
var controller = (function(budgetctrl,UICtrl){
// privioulsly all the event listeners were scattered But now i have a seprate function SetupEventListeners  for all events
var setupEventListeners = function(){
var DOM = UICtrl.getDOMstrings();
document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);
document.addEventListener('keypress',function(event){
  if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
};

var ctrlAddItem = function(){
      var input, newItem;
      // Get the input data.
      input = UICtrl.getInput();
      
      //add the item to the budget controller
      newItem   =  budgetctrl.addItem(input.type,input.description,input.value);

      // add the item to the Ui
      // calculate budget
      // Dispalay budget
      console.log(input);
    };

return {
  init:function(){
     console.log("Your App Has started");
    setupEventListeners();
  }
};
})(budgetController,UIController);

controller.init();
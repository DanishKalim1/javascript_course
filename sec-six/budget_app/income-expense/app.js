//Budget controller

var budgetController = (function(){
  // Made expene and income functions to calculate Data
  var Expenses = function(id,description,value){
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
      // Get the input data.
      var input = UICtrl.getInput();
      
      //add the item to the budget controller
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
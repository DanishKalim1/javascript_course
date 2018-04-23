//Budget controller
var budgetController = (function(){
  // some code
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
    var DOM = UICtrl.getDOMstrings();
    var ctrlAddItem = function(){
      // Get the input data.
      var input = UICtrl.getInput();
      
      //add the item to the budget controller
      // add the item to the Ui
      // calculate budget
      // Dispalay budget
      console.log(input);
    }
document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

document.addEventListener('keypress',function(event){
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController,UIController);
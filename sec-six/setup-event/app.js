//Budget controller
var budgetController = (function(){
  // some code
})();
// UI controller
var UIController = (function(){
	
})();

// Global App controller.
var controller = (function(budgetctrl,UICtrl){
    var ctrlAddItem = function(){
      // Get the input data.
      //add the item to the budget controller
      // add the item to the Ui
      // calculate budget
      // Dispalay budget
      console.log("fine its working");
    }
    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress',function(event){
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController,UIController);
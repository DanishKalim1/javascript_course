//Budget controller
var budgetController = (function(){
  // some code
})();
// UI controller
var UIController = (function(){
	
})();

// Global App controller.
var controller = (function(budgetctrl,UICtrl){

    document.querySelector('.add__btn').addEventListener('click',function(){
      console.log('button clicked');
    });


})(budgetController,UIController);
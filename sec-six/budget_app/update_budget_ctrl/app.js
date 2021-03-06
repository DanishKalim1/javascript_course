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

var calculateTotal = function(type){
var sum = 0;
  data.allItems[type].forEach(function(cur){
  sum +=  cur.value;

});
data.totals[type] = sum;

};

var data = {
    allItems:{
      exp:[],
      inc:[]
},

     totals:{
      exp:0,
      inc:0
},
budget:0,
percentage: -1

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

calculateBudget: function(){
//calculate total income and expense
calculateTotal('exp');
calculateTotal('inc');
//calculate the Budget income - expense
data.budget = data.totals.inc - data.totals.exp;

//calculate the percentage of income
if (data.totals.inc > 0) {
  data.percentage = Math.round((data.totals.exp/data.totals.inc) * 100);
}
else { 
  data.percentage = -1;
}

},
getBudget: function(){

return {

budget:data.budget,
totalInc:data.totals.inc,
totalExp:data.totals.exp,
percentage:data.percentage

};

},

testing: function(){
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
      incomeContainer:'.income__list',
      expensesContainer:'.expenses__list'

}
     return {
       getInput: function(){
          return {
             // getting input data from elements
              type: document.querySelector(DOMstrings.inputType).value,
              description: document.querySelector(DOMstrings.inputDescription).value,
              value: parseFloat(document.querySelector(DOMstrings.inputValue).value)

         };
        
      },

     addListItem: function(obj, type) {
      var html, newHtml, element;
      //Create html stings with placeholder text
     if (type === 'inc'){

     element = DOMstrings.incomeContainer;
     html = html = html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }
      else if(type === 'exp') {
     element = DOMstrings.expensesContainer;
     html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

     }
     //Replace the placeholder text with actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);
    // insert html into DOM
    document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
     },

     clearFields: function(){
      var fields, fieldsArr;
      fields = document.querySelectorAll(DOMstrings.inputDescription + ' , ' + DOMstrings.inputValue);
      fieldsArr = Array.prototype.slice.call(fields);
      fieldsArr.forEach(function(current,index,array){
      current.value = "";

      });

     fieldsArr[0].focus();

     },

    // exposing to public so that we can excess DOMstrings
      getDOMstrings: function(){
        return DOMstrings;
        }

      };
})();

// Global App controller.
var controller = (function(budgetCtrl,UICtrl){
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

var updateBudget = function(){
//calculate budget
budgetCtrl.calculateBudget();
//return budget
var budget = budgetCtrl.getBudget();
//Display budget on UI
console.log(budget);

}

var ctrlAddItem = function(){
      var input, newItem;
      // Get the input data.
      input = UICtrl.getInput();
    
     if(input.description !== "" && !isNaN(input.value) && input.value > 0 ) {
        //add the item to the budget controller
      newItem   =  budgetCtrl.addItem(input.type,input.description,input.value);

      // add the item to the Ui
      UICtrl.addListItem(newItem, input.type);
      //Clear fields
      UICtrl.clearFields();
      // calculate and update budget
      updateBudget();

     }

     
    };

return {
  init:function(){
     console.log("Your App Has started");
    setupEventListeners();
  }
};
})(budgetController,UIController);

controller.init();
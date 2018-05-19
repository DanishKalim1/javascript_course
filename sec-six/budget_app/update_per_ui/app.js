// BUDGET CONTROLLER
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    
    Expense.prototype.calculatePercentage = function(totalIncome) {
        if (totalIncome > 0) {
        this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };
    
    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };
    
        var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    
    };
    
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(currentElement){
            sum += + currentElement.value;
        });
        data.totals[type] = sum;
        /*
        0
        [200, 400, 100]
        sum = 0 + 200
        sum = 200 + 400
        sum = 600 + 100 = 700
        */
        
    };
    
    var data = {
        allItems: {
            exp: [],
            inc: []
    },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: 0
    };
        return {
        addItem: function(type, des, val) {
            var newItem, ID;
            //Create new ID
            if (data.allItems[type].length > 0) {
            ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else {
                ID = 0;
            }

            //Create new item based on 'income' or 'expense' type
            if (type === 'exp') {
            newItem = new Expense(ID, des, val);
        } else if (type === 'inc') {
            newItem = new Income(ID, des, val);
        }
            //Push it into our data structure
            data.allItems[type].push(newItem);
            //Return the new element
            return newItem;
        },
            
        deleteItem: function(type, id) {
            var ids, index;    
            //id = 6
//          data.allItems[type][id];
            //ids = [1 2 4  8]
            //index = 3
            ids = data.allItems[type].map(function(currentID) {
                return currentID.id;
                
            });
            
            index = ids.indexOf(id);
            
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }

        },
            
        calculateBudget: function() {
            
         //1. Calculate total income and expenses
         calculateTotal('exp');
         calculateTotal('inc');
         //2. Calculate the budget: income - expenses
         data.budget = data.totals.inc - data.totals.exp;
//         3. Calculate the percentage of income that we spent 
//          Expense = 100 and income = 200, spent 50% of income = 100/200 = 0.5 * 100
            if (data.totals.inc > data.totals.exp) {
         data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100); 
            } else {
                return data.percentage = -1;
            }
        },
            
            calculatePercentages: function() {
                /*
                a = 20
                b = 10
                c = 40
                income = 100
                a = 20/100 = 20%
                b = 10/100 = 10%
                c = 40/100 = 40%
                */
                data.allItems.exp.forEach(function(current) {
                    current.calculatePercentage(data.totals.inc);
                });
            },
            
            getPercentages: function() {
                var allPerc;
                allPerc = data.allItems.exp.map(function(current) {
                    return current.getPercentage();
                });
                return allPerc;
            },
            
            getBudget: function() {
                return {
                    budget: data.budget,
                    totalInc: data.totals.inc,
                    totalExp: data.totals.exp,
                    percentage: data.percentage
                };
            },
        
        testing: function() {
        console.log(data);
    }
    
    };
})();

// UI CONTROLLER
var UIController = (function() {
    //Code..
        var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list', 
        budgetLabel: '.budget__value',
        budgetIncomeLabel: '.budget__income--value',
        budgetExpensesLabel: '.budget__expenses--value',
        budgetExpensesPercentage: '.budget__expenses--percentage', 
        container: '.container',
        expensesPercentageLabel: '.item__percentage'    
};
    return {    
      getinput: function() {
          return {
            type : document.querySelector(DOMstrings.inputType).value, //Will be either income or expense
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : parseFloat(document.querySelector(DOMstrings.inputValue).value),
          };
      },
        addListItem: function(obj, type) {
          var html, newHtml, element;
          // Create HTML string with placeholder text
          if (type === 'inc') {
              element = DOMstrings.incomeContainer;
              html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
          } else if (type === 'exp') {
              element = DOMstrings.expensesContainer;
              html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
          }
          // Replace the placeholder text with some actual data
          newHtml = html.replace('%id%', obj.id);
          newHtml = newHtml.replace('%description%', obj.description);
          newHtml = newHtml.replace('%value%', obj.value, type);
          // Insert the HTML into the DOM
          document.querySelector(element).insertAdjacentHTML('afterbegin', newHtml);
      },
        
        deleteListItem: function(selectorID) {
            // 1st Method
            document.getElementById(selectorID).parentNode.removeChild(document.getElementById(selectorID));
            
            // 2nd Method
//          var el = document.getElementById(selectorID;
//          el.parentNode.removeChild(el);
        },
        
        clearFields: function() {
            var fields, fieldsArr;
            
         fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            
            //Will not work method
//            fields.slice();
            
            //Will work method
            fieldsArr = Array.prototype.slice.call(fields);
            
            fieldsArr.forEach(function(currentValue, indexNumber, array) {
                currentValue.value = "";
            });
            
            fieldsArr[0].focus();
        },
        
        displayBudget: function(obj) {
            
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.budgetIncomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.budgetExpensesLabel).textContent = obj.totalExp;
            
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.budgetExpensesPercentage).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.budgetExpensesPercentage).textContent = '---';
            }
    
        },
        
        displayPercentages: function(percentages) {
    
            var fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);
            
            var nodeListForEach = function(list, callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            };
            
            nodeListForEach(fields, function(currentPercentageValue, indexNumber) {
                if (percentages[indexNumber] > 0) {
                currentPercentageValue.textContent = percentages[indexNumber] + '%';
                } else {
                    currentPercentageValue.textContent = '---';
                }
            });
            
        },
        
        getDOMstrings: function() {
            return DOMstrings;
        }
        
    };
    
//    return {
//        addItem: function(type, des, val) {
//            var newItem, ID;
//            //Create new ID
//            if (data.allItems[type].length > 0) {
//            ID = data.allItems[type][data.allItems[type].length -1].id + 1;
//            } else {
//                ID = 0;
//            }
//
//            //Create new item based on 'income' or 'expense' type
//            if (type === 'exp') {
//            newItem = new Expense(ID, des, val);
//        } else if (type === 'inc') {
//            newItem = new Income(ID, des, val);
//        }
//            //Push it into our data structure
//            data.allItems[type].push(newItem);
//            //Return the new element
//            return newItem;
//        },
//        
//        testing: function() {
//        console.log(data);
//    }
//    
//    };

})();

// GLOBAL APP CONTROLLER
var  controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(event) {
        
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }    
    });
        
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    };
    
//    var DOM = UICtrl.getDOMstrings();
    
    var updateBudget = function() {
        
        //1. Caluclate the budget
        budgetCtrl.calculateBudget();
        //2. Return the budget
        var budget = budgetCtrl.getBudget();
        //3. Display the budget on the UI
        UICtrl.displayBudget(budget);
    };
    
    var updatePercentages = function() {
        
        //1. Calculate percentages
        budgetCtrl.calculatePercentages();
        //2. Read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();
        //3. Update the UI with the new percentages
        UICtrl.displayPercentages(percentages);
    };
    
    var ctrlAddItem =  function() {
        var input, newItem;
        //TO DO: 1. Get the filed input data
        input = UICtrl.getinput();
//        console.log(input);
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
        //2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        //3. Add the item to the UI Interface as well
        UICtrl.addListItem(newItem, input.type);    
        //4. Clear fields
        UICtrl.clearFields();        
        //5. Calculate and update budget
        updateBudget();
        //6. Calculate and update percentages
        updatePercentages();    
  
        }
    };
    
    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if (itemID) {
            //inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            
            //1. Delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);
            //2. Delete the item from the UI
            UICtrl.deleteListItem(itemID);
            //3. Update and show the new budget
            updateBudget();
            //4. Calculate and update percentages
            updatePercentages();
        }
            
    };
    
    return {
        init: function() {
            console.log('Application has started.');
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            
            setupEventListeners();
        }
    };

    
})(budgetController,UIController);

controller.init();
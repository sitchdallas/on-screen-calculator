let displayValue = '0';
let firstInputValue = null;
let secondInputValue = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
let display = '0';

/*
find a way to touch numbers on the screen and add it to the displayValue 

find a way to compute it all, for example..
if you press the "+" button, then put the first and second value through a math.add(x, y)

*/


//display numbers on the screen
let operators = document.querySelectorAll(".operator");
display = document.getElementById("display")

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function() {
      display.innerHTML += this.innerText;
    });
  };

//function for picking which operand to use
let operands = document.querySelectorAll(".operands");


/*
function add() {
    displayValue = newDisplayValue;
    newCalculation = ((displayValue) - (userInputValue));
    newDisplayValue = newCalculation;
}

function subtract() {
    displayValue = newDisplayValue;
    newCalculation = ((displayValue) - (userInputValue));
    newDisplayValue = newCalculation;
}

function multiply() {
    displayValue = newDisplayValue;
    newCalculation = ((displayValue) * (userInputValue));
    newDisplayValue = newCalculation;
}

function divide() {
    displayValue = newDisplayValue;
    newCalculation = ((displayValue) / (userInputValue));
    newDisplayValue = newCalculation;
} */





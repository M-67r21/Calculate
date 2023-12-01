let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function name(params) {
    // Store all components in HTML in JS
    let clear = document.querySelector("#clear-btn");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previouScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e) {
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function name(e) {
        handleOperator(e.target.textContent)
        previouScreen.textContent = previousValue +"" + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function name(params) {
        previousValue = '';
        currentValue = '';
        operator = '';
        previouScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })
    equal.addEventListener("click", function name(params) {
        if (currentValue != '' && previousValue != '') {
            calculate()
            previouScreen.textContent = '';
            if (previousValue.length <= 5) {
                currentScreen.textContent = previousValue;
            }
            else{
                currentScreen.textContent = previousValue.slice(0,5) + "...";
            }
        }
        
        
    })
    decimal.addEventListener("click", function name(params) {
        addDecimal();
    })
})

function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    }
    
}

function handleOperator(op) {
    operator = op;
    previousValue =currentValue;
    currentValue = '';
}

function calculate(params) {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator == "+") {
        previousValue += currentValue;
    }
    else if (operator == "-") {
        previousValue -= currentValue;
    }
    else if (operator == "x") {
        previousValue *= currentValue;
    }
    else{
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

function addDecimal(params) {
    if (!currentValue.includes(".")) {
        currentValue += '.';
    }
}

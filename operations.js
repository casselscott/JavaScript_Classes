// Function to append digits and operators to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to perform arithmetic operations
function operate(operator) {
    document.getElementById('display').value += operator;
}

// Function to calculate result
function calculate() {
    let expression = document.getElementById('display').value;
    let result = eval(expression);
    document.getElementById('display').value = result;
}

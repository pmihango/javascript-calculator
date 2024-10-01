// Select the display element
const display = document.getElementById('display');

// Append number to the display when a number button is clicked
function appendNumber(number) {
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

// Append operator (+, -, *, /) to the display when an operator button is clicked
function appendOperator(operator) {
    display.value += operator;
}

// Clear the entire display
function clearDisplay() {
    display.value = '';
}

// Delete the last character from the display
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result of the expression shown on the display
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

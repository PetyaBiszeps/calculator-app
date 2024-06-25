// Button and Display activities

// --- default

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function delFromDisplay() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'error';
    }
}

// --- specific rules


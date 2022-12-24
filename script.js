
// global vars
let done = false;
let equation = [];
let integer = '';
let selectedOperator = '';

// elements
const display = document.querySelector('#display');
const subDisplay = document.querySelector('#sub-display');
const numbers = document.querySelectorAll('.numbers button');
const clearButton = document.querySelector('.clear button');
const operators = document.querySelectorAll('.operators button:not(.submit)');
const submitButton = document.querySelector('.submit');


// event listeners

const numberPress = (e) => {
    if (done) {
        clear();
        done = false;
    };
    if (selectedOperator) {
        equation.push(selectedOperator);
        subDisplay.value += display.value;
        selectedOperator = '';
    }
    toggleAllButtons();
    display.value = '';
    let pressedNumber = e.target.textContent;
    integer += pressedNumber;
    display.value = integer;
    subDisplay.value += pressedNumber;
}

const operatorPress = (e) => {
    if (done) {
        clear();
        done = false;
    };
    if (integer != '') {
        equation.push(integer);
        integer = ''
    }
    switch(e.target.textContent) {
        case '+':
            selectedOperator = add;
            break;
        case '%':
            selectedOperator = divide;
            break;
        case '*':
            selectedOperator = multiply;
            break;
        case '-':
            selectedOperator = subtract;
            break;
        default:
            //
    }
    display.value = e.target.textContent;
}

const clear = () => {
    integer = '';
    selectedOperator = '';
    display.value = '';
    equation = [];
    subDisplay.value = equation;
    operators.forEach(button => button.removeEventListener('click', operatorPress));
}


//main logic 

const processArray = (arr) => {
    let myEquation = arr;
    if (integer) {
        myEquation.push(integer);
        integer = '';
    }
    if (myEquation.length < 3) {
        display.value = myEquation[0];
        operators.forEach(button => button.removeEventListener('click', operatorPress));
        done = true;
    } else {
        let a = myEquation.shift()
        let op = myEquation.shift()
        let b = myEquation.shift()

    myEquation.unshift(operate(a, b, op))
    return processArray(myEquation);
    }
}


numbers.forEach(element => element.addEventListener('click', numberPress));
clearButton.addEventListener('click', clear)
submitButton.addEventListener('click', () => processArray(equation));

const toggleAllButtons = () => {
    operators.forEach(button => button.removeEventListener('click', operatorPress));
    operators.forEach(button => button.addEventListener('click', operatorPress));
}

const toggleButton = (e) => {
    let button = e;
    button.removeEventListener('click', operatorPress);
    button.addEventListener('click', operatorPress);
}


// add

const add = (a,b) => parseInt(a) + parseInt(b);

// subtract

const subtract = (a,b) => a - b;

// multiply

const multiply = (a,b) => a * b;

// divide

const divide = (a,b) => a / b;


// operate - takes two operants and an operator, then calls one of the above functions. 

const operate = (a, b, operator) => operator(a,b);

//




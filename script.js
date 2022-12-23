
// global vars

let input = '';

let operatorDict = {
    subtract: '-',
    add: '+',
    multiply: '*',
    divide: '%'
};


// elements
const display = document.querySelector('#display');
const subDisplay = document.querySelector('#sub-display');
const numbers = document.querySelectorAll('.numbers button');
const clearButton = document.querySelector('.clear button');
const operators = document.querySelectorAll('.operators button:not(.submit)');
const submitButton = document.querySelector('.submit');




// event listeners

const numberPress = (e) => {
    display.value = '';
    let number = e.target.textContent;
    display.value += number;
    input += display.value;
    subDisplay.value = input;
}

const clear = () => {
    display.value = '';
    input = '';
    subDisplay.value = input;
}

const operatorPress = (e) => {
    let operator = e.target.textContent;
    display.value = operator;
    input += operator;
    subDisplay.value = input;
}

const processArray = (someString) => {
    let submission = someString.replaceAll(',','').match(/\d+|\D+/g);
    console.log(submission);
    if (submission.length < 3) {
        console.log('sub length less than 3')
        display.value = someString.match(/\d+|\D+/g)[0];
    }
    if (submission.includes('.')) {
        display.value = someString.split('').join("");
    } else {
        let operator;
        let a = submission.shift()
        let op = submission.shift()
        let b = submission.shift()
        switch(op) {
            case '+':
                operator = add;
                break;
            case '%':
                operator = divide;
                break;
            case '*':
                operator = multiply;
                break;
            case '-':
                operator = subtract;
                break;
            default:
                //
    }
    submission.unshift(operate(a, b, operator))
    return processArray(String(submission));
    }
}


numbers.forEach(element => element.addEventListener('click', numberPress));
clearButton.addEventListener('click', clear)
operators.forEach(element => element.addEventListener('click', operatorPress));
submitButton.addEventListener('click', () => processArray(input));




// add

const add = (a,b) => parseInt(a) + parseInt(b);

// subtract

const subtract = (a,b) => a - b;

// multiply

const multiply = (a,b) => a * b;

// divide

const divide = (a,b) => a / b;

const hack = (a,b) => `${a}.${b}`;


// operate - takes two operants and an operator, then calls one of the above functions. 

const operate = (a, b, operator) => operator(a,b);

//




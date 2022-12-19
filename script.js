// add

const add = (a,b) => a + b;

// subtract

const subtract = (a,b) => a - b;

// multiply

const multiply = (a,b) => a * b;

// divide

const divide = (a,b) => a / b;


// operate - takes two operants and an operator, then calls one of the above functions. 

const operate = (a, b, operator) => operator(a,b);

//
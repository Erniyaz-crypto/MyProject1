let lastNumber;
let lastOperator;

function fact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

function addNumber(number) {
    let inputElement = document.querySelector(`.js-input`);

    if (lastOperator === '=') {
        inputElement.value = ``;
        lastOperator = ``;
    }
    
    let manuValue = inputElement.value + String(number);
    inputElement.value = manuValue;
}

function delButton() {
    let inputElement = document.querySelector('.js-input');
    let menuValue = inputElement.value
    menuValue = menuValue.slice(0, menuValue.length - 1);
    inputElement.value = menuValue;
}


function resetButton() {
    let inputElement = document.querySelector(`.js-input`);
    inputElement.value = ``;
}


function backslashButton() {
    let inputElement = document.querySelector(`.js-input`);
    lastNumber = Number(inputElement.value);
    lastOperator = '/'
    inputElement.value = ``;
}


function equalButton() {
    let inputElement = document.querySelector(`.js-input`);
    let secondNumber = Number(inputElement.value);

    if (lastOperator === '/') {
        if (secondNumber === 0) {
            inputElement.value = `Senin basin islemeyd!`;
        } else {
            inputElement.value = `${lastNumber/secondNumber}`
        }
    } else if (lastOperator === '*') {
        inputElement.value = `${lastNumber * secondNumber}`;
    }else if (lastOperator === '+') {
        inputElement.value = `${lastNumber + secondNumber}`;
    }else if (lastOperator === '-') {
        inputElement.value = `${lastNumber - secondNumber}`;
    };


    lastOperator = '=';
};



function multiplyButton(){
    let inputElement = document.querySelector(`.js-input`);
    lastNumber = Number(inputElement.value);
    lastOperator = '*';
    inputElement.value = ``;
}

function minusButton(){
    let inputElement = document.querySelector(`.js-input`);
    lastNumber = Number(inputElement.value);
    lastOperator = '-';
    inputElement.value = ``;
}

function plusButton(){
    let inputElement = document.querySelector(`.js-input`);
    lastNumber = Number(inputElement.value);
    lastOperator = '+';
    inputElement.value = ``;
}

function factorialButton() {
    let inputElement = document.querySelector(`.js-input`);
    inputElement.value = String(fact(Number(inputElement.value)));
}

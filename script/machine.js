// Payoo user info
const payooNumber = '12345678910';
const payooPassword = '1234';

// Useful Functions
function getElement (parameter){
    const input = document.querySelector(parameter);
    return input;
};

function getValue (parameter){
    const input = document.querySelector(parameter);
    return input.value;
};

function getText(parameter) {
    const input = document.querySelector(parameter);
    return input.innerText;
};

function getBalance() {
    const balance = Number(document.querySelector('#balance').innerText);
    return balance;
};

function setBalance(newBalance) {
    const balanceElement = document.querySelector('#balance');
    balanceElement.innerText = newBalance;
};
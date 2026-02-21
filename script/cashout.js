// Cashout functionality

const cashoutNumberElement = getElement('#cashout-number-input');
const cashoutAmountElement = getElement('#cashout-amount-input');
const cashoutPinElement = getElement('#cashout-pin-input');
const cashoutBtnElement = getElement('#cashout-btn');

cashoutBtnElement.addEventListener("click", () => {

    const cashoutNumber = cashoutNumberElement.value.trim();
    const cashoutAmount = Number(cashoutAmountElement.value);
    const cashoutPin = cashoutPinElement.value;
    if (cashoutNumber.length !== 11 || isNaN(Number(cashoutNumber))) {
        alert("Invalid Number!");
        cashoutNumberElement.value = '';
        return;
    }

    if (isNaN(cashoutAmount) || cashoutAmount <= 0 || cashoutAmount > balance) {
        alert("Invalid Amount!");
        cashoutAmountElement.value = '';
        return;
    }

    if (cashoutPin !== payooPassword) {
        alert("Invalid Pin!");
        cashoutPinElement.value = '';
        return;
    }

    alert("Cashout Successful");

    balance -= cashoutAmount;
    setBalance(balance);

    cashoutNumberElement.value = '';
    cashoutAmountElement.value = '';
    cashoutPinElement.value = '';
});

const logoutBtn = getElement('#logout-btn');
logoutBtn.addEventListener('click', () => {
    window.location.replace('./index.html');
});

// *** my first code

// const balanceElement = getElement('#balance');
// let balance = Number(getText('#balance'));

// const cashoutNumberInput = getElement('#cashout-number-input');
// const cashoutAmountInput = getElement('#cashout-amount-input');
// const cashoutPinInput = getElement('#cashout-pin-input');
// const cashoutBtn = getElement('#cashout-btn');

// cashoutBtn.addEventListener("click", () => {
//     const cashoutNumber = cashoutNumberInput.value;
//     const cashoutAmount = Number(cashoutAmountInput.value);
//     const cashoutPin = cashoutPinInput.value;

//     if (cashoutNumber.length === 11 && cashoutNumber !== '') {
//         if (cashoutAmount <= balance && cashoutAmount != '') {
//             if (cashoutPin === '1234') {
//                 alert('Cashout Successful.');
//                 balance = balance - cashoutAmount;
//                 balanceElement.innerText = balance;

//                 cashoutNumberInput.value = '';
//                 cashoutAmountInput.value = '';
//             } else {
//                 alert('Invalid Pin!');
//             }
//         } else {
//             alert('Invalid Amount!');
//             cashoutAmountInput.value = '';
//         }
//     } else {
//         alert("Invalid Number!");
//         cashoutNumberInput.value = '';
//     }
//     cashoutPinInput.value = '';
// });
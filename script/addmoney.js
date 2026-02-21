// Main balance
let balance = getBalance();


// Add money functionality
const addMoneyBtn = getElement('#add-money-btn');
addMoneyBtn.addEventListener("click", () => {
    const bankAccount = getValue('#add-money-bank');
    const addMoneyNumber = getValue('#add-money-number');
    const addMoneyAmount = getValue('#add-money-amount');
    const addMoneyPin = getValue('#add-money-pin');

    if(bankAccount === 'Select a bank'){
        alert('Please select a bank');
        return;
    }
    if (addMoneyNumber.length !== 11 || isNaN(Number(addMoneyNumber))) {
        alert("Invalid Number!");
        getElement('#add-money-number').value = '';
        return;
    }

    if (isNaN(addMoneyAmount) || addMoneyAmount <= 0 ) {
        alert("Invalid Amount!");
        getElement('#add-money-amount').value = '';
        return;
    }

    if (addMoneyPin !== payooPassword) {
        alert("Invalid Pin!");
        getElement('#add-money-pin').value = '';
        return;
    }
    alert(`Add Money Successful From ${bankAccount}\nAccount Number: ${addMoneyNumber}\nAdd Amount: ${addMoneyAmount} $`);

    balance += Number(addMoneyAmount);
    setBalance(balance);

    getElement('#add-money-bank').selectedIndex = 0;
    getElement('#add-money-number').value = '';
    getElement('#add-money-amount').value = '';
    getElement('#add-money-pin').value = '';
});
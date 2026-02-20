// Login functionality

const loginBtn = getElement('#login-btn');

loginBtn.addEventListener('click', () => {

    const numberInput = getElement('#number-input');
    const pinInput = getElement('#pin-input');

    if (numberInput.value === '' && numberInput.value === '') {
        alert('Input Number And Password.');
    } else if (numberInput.value === payooNumber && pinInput.value === payooPassword) {
        window.location.assign('./home.html');
        // alert('Login Successful...');
    } else {
        if (numberInput.value !== payooNumber) {
            alert('Login Failed! NUMBER is not Registered!');
            numberInput.value = '';
        } else if (pinInput.value !== payooPassword) {
            alert('Login Failed! PIN Invalid!');
        }
        pinInput.value = '';
    }
});

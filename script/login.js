// login functionality

const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', () => {
    const numberInput = document.getElementById('number-input');
    const pinInput = document.getElementById('pin-input');
    if (numberInput.value === '' && numberInput.value === '') {
        alert('Input Number And Password.');
    } else if (numberInput.value == '01234567890' && pinInput.value == '1234') {
        window.location.assign('./home.html');
        alert('Login Successful...');
    } else {
        if (numberInput.value != '01234567890') {
            alert('Login Failed! NUMBER is not Registered.');
        } else if (pinInput.value != '1234') {
            alert('Login Failed! PIN Wrong');
        }
    }
    numberInput.value = '';
    pinInput.value = '';
})

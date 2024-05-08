var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var phoneNumber = document.getElementById("phone-number");
var email = document.getElementById("email");
var pass = document.getElementById("password");
var confirm_pass = document.getElementById("confirm_password");

document.getElementById("signup-form").addEventListener("submit", () => {



    var confirmed = validate();


});


var validate = () => {

    if (!validateEmail()) email.style.borderColor = 'red';
    else email.style.borderColor = '';
    if (!validateFName()) fname.style.borderColor = 'red';
    else fname.style.borderColor = '';
    if (!validateLName()) lname.style.borderColor = 'red';
    else lname.style.borderColor = '';
    if (!validatePhoneNumber()) phoneNumber.style.borderColor = 'red';
    else phoneNumber.style.borderColor = '';

};


function validatePass() {
    if (pass.value !== confirm_pass.value) {

        pass.style.borderColor = 'red';
        confirm_pass.style.borderColor = 'red';

        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Passwords does not match!';
        return false;

    } else {
        pass.style.borderColor = '';
        confirm_pass.style.borderColor = '';
        return true;
    }
};

function validateEmail() {

    const atIndex = email.value.indexOf('@');
    const dotIndex = email.value.lastIndexOf('.');

    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.value.length - 1;
}

function validateFName() {
    const nameRegex = /^[a-zA-Z]*$/;
    return nameRegex.test(fname.value);
}

function validateLName() {
    const nameRegex = /^[a-zA-Z]*$/;
    return nameRegex.test(lname.value);
}

function validatePhoneNumber() {
    const phoneRegex = /^\d*$/;
    return phoneRegex.test(phoneNumber.value);
}


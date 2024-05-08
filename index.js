// Or Bar Califa 318279429
// Daniel Tselon Fradkin 316410885

// Getting form input elements
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var phoneNumber = document.getElementById("phone-number");
var email = document.getElementById("email");
var pass = document.getElementById("password");
var confirm_pass = document.getElementById("confirm_password");

// Adding event listener to the form submission
document.getElementById("signup-form").addEventListener("submit", () => {
    // Calling validate function when the form is submitted
    var confirmed = validate();
});

// Function to validate form inputs
var validate = () => {
    // Validating email
    if (!validateEmail()) email.style.borderColor = 'red';
    else email.style.borderColor = '';
    // Validating first name
    if (!validateFName()) fname.style.borderColor = 'red';
    else fname.style.borderColor = '';
    // Validating last name
    if (!validateLName()) lname.style.borderColor = 'red';
    else lname.style.borderColor = '';
    // Validating phone number
    if (!validatePhoneNumber()) phoneNumber.style.borderColor = 'red';
    else phoneNumber.style.borderColor = '';
};

// Function to validate password
function validatePass() {
    if (pass.value !== confirm_pass.value) {
        // If passwords don't match, show error message
        pass.style.borderColor = 'red';
        confirm_pass.style.borderColor = 'red';
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Passwords do not match!';
        return false;
    } else {
        // If passwords match, remove error message
        pass.style.borderColor = '';
        confirm_pass.style.borderColor = '';
        document.getElementById('message').innerHTML = '';
        return true;
    }
};

// Function to validate email format
function validateEmail() {
    const atIndex = email.value.indexOf('@');
    const dotIndex = email.value.lastIndexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.value.length - 1;
}

// Function to validate first name format
function validateFName() {
    const nameRegex = /^[a-zA-Z]*$/;
    return nameRegex.test(fname.value);
}

// Function to validate last name format
function validateLName() {
    const nameRegex = /^[a-zA-Z]*$/;
    return nameRegex.test(lname.value);
}

// Function to validate phone number format
function validatePhoneNumber() {
    const phoneRegex = /^\d*$/;
    return phoneRegex.test(phoneNumber.value);
}

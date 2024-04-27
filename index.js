

document.getElementById("signup-form").addEventListener("submit", (e) => {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var confirm_pass = document.getElementById("confirm_password").value;

    check();
});


var check = () => {
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {

        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';

    } else {

        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';

    }
};
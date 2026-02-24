// show password

function togglePassword(id) {
    let input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

function showPass() {
    togglePassword("password");
}

function confirmPass() {
    togglePassword("confirmPassword");
}

function loginPassword() {
    togglePassword("loginPassword");
}

// SignUp

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let inputs = signupForm.querySelectorAll("input");
        let errors = signupForm.querySelectorAll(".error");

        errors.forEach(err => err.textContent = "");

        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let phone = document.getElementById("phone");
        let city = document.getElementById("city");
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirmPassword");

        let valid = true;

        if (name.value.trim() === "") {
            errors[0].textContent = "Name required";

            valid = false;
        }

        if (email.value.trim() === "") {
            errors[1].textContent = "Email required";
            valid = false;
        }

        if (phone.value.trim().length !== 10) {
            errors[2].textContent = "Enter valid phone number";
            valid = false;
        }

        if (city.value.trim() === "") {
            errors[3].textContent = "City required";
            valid = false;
        }

        if (password.value.length < 6) {
            errors[4].textContent = "Min 6 characters required";
            valid = false;
        }

        if (password.value !== confirmPassword.value) {
            errors[5].textContent = "Passwords do not match";
            valid = false;
        }

        if (valid) {
            localStorage.setItem("email", email.value);
            localStorage.setItem("password", password.value);

            alert("Signup Successful!");
            window.location.href = "Signin.html";
        }
        
    });
}

// login

const  loginForm = document.getElementById("SigninForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("loginEmail");
        let password = document.getElementById("loginPassword");
        let errors = loginForm.querySelectorAll(".error");

        errors.forEach(err => err.textContent = "");

        let savedEmail = localStorage.getItem("email");
        let savedPass = localStorage.getItem("password");

        if (email.value === savedEmail && password.value === savedPass) {
            window.location.href = "index.html";
        } else {
            errors[1].textContent = "Invalid Email or Password";
        }
    });
}


function toggleMenu() {
    const menu = document.getElementById("navLinks");
    menu.classList.toggle("active");
}

// logout 

function logout() {
    alert("Logged Out Successfully!");
    window.location.href = "Signin.html";
}
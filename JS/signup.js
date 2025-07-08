let form = document.getElementById('signup-form');
let un = document.getElementById('username');
let pass = document.getElementById('password');
let cpass = document.getElementById('Cpassword');
let num = document.getElementById('number');
let mail = document.getElementById('mail');
let dob = document.getElementById('date');
let genderRadio = document.getElementsByName('gender');

let unError = document.getElementById('usernameError');
let passError = document.getElementById('passwordError');
let cpassError = document.getElementById('CpasswordError');
let mailError = document.getElementById('mailError');
let dateError = document.getElementById('dateError');
let numError = document.getElementById('numError');
let genError = document.getElementById('genderError');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    unError.textContent = "";
    passError.textContent = "";
    cpassError.textContent = "";
    mailError.textContent = "";
    dateError.textContent = "";
    numError.textContent = "";
    genError.textContent = "";

    let isValid = true;


    let usernamevalue = un.value.trim();
    if (!usernamevalue) {
        unError.textContent = "Username cannot be empty";
        isValid = false;
    } else if (usernamevalue.length < 3) {
        unError.textContent = "Username must be at least 3 characters";
        isValid = false;
    } else if (usernamevalue.length > 15) {
        unError.textContent = "Username cannot exceed 15 characters";
        isValid = false;
    }

    
    let passwordValue = pass.value.trim();
    if (!passwordValue) {
        passError.textContent = "Password cannot be empty";
        isValid = false;
    } else if (!/(?=.*[a-z])/.test(passwordValue)) {
        passError.textContent = "Password must contain at least one lowercase letter";
        isValid = false;
    } else if (!/(?=.*[A-Z])/.test(passwordValue)) {
        passError.textContent = "Password must contain at least one uppercase letter";
        isValid = false;
    } else if (!/(?=.*\d)/.test(passwordValue)) {
        passError.textContent = "Password must contain at least one digit";
        isValid = false;
    } else if (!/(?=.*[&*#@!$%^])/ .test(passwordValue)) {
        passError.textContent = "Password must contain at least one special character ";
        isValid = false;
    } 


    let confirmvalue = cpass.value.trim();
    if (!confirmvalue) {
        cpassError.textContent = "Please confirm your password";
        isValid = false;
    } else if (passwordValue !== confirmvalue) {
        cpassError.textContent = "Passwords do not match";
        isValid = false;
    }

    let emailValue = mail.value.trim();
    if (!emailValue) {
        mailError.textContent = "Email cannot be empty";
        isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
        mailError.textContent = "Invalid email format";
        isValid = false;
    }

    if (!dob.value) {
        dateError.textContent = "Date of birth is required";
        isValid = false;
    }

    let numberValue = num.value.trim();
    if (!numberValue) {
        numError.textContent = "Mobile number is required";
        isValid = false;
    } else if (!/^\d{10}$/.test(numberValue)) {
        numError.textContent = "Mobile number must be 10 digits";
        isValid = false;
    }

 
    let genderValue = "";
    for (let radio of genderRadio) {
        if (radio.checked) {
            genderValue = radio.value;
            break;
        }
    }
    if (!genderValue) {
        genError.textContent = "Please select your gender";
        isValid = false;
    }

    if (isValid) {
        let userData = {
            username: usernamevalue,
            password: passwordValue,
            email: emailValue,
            dob: dob.value,
            gender: genderValue,
            number: numberValue
        };
        localStorage.setItem('signupData', JSON.stringify(userData));
        alert("Signup successful!");
        form.reset();
        window.location.href = "login.html";
    }
});
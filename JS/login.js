let form=document.getElementById('login-form');
let mail=document.getElementById('mail');
let pass=document.getElementById('pass');

let mailError=document.getElementById('mailError');
let passError=document.getElementById('passError');

form.addEventListener('submit',(e)=>{

    mailError.textContent='';
    passError.textContent='';
    e.preventDefault();

    let valid=true;

    let mailValue = mail.value.trim();
    if (!mailValue) {
        mailError.textContent = "Email cannot be empty";
        valid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mailValue)) {
        mailError.textContent = "Invalid email format";
        valid = false;
    }

        let passValue = pass.value.trim();
    if (!passValue) {
        passError.textContent = "Password cannot be empty";
        valid = false;
    } else if (!/(?=.*[a-z])/.test(passValue)) {
        passError.textContent = "Password must contain at least one lowercase letter";
        valid = false;
    } else if (!/(?=.*[A-Z])/.test(passValue)) {
        passError.textContent = "Password must contain at least one uppercase letter";
        valid = false;
    } else if (!/(?=.*\d)/.test(passValue)) {
        passError.textContent = "Password must contain at least one digit";
        valid = false;
    } else if (!/(?=.*[&*#@!$%^])/ .test(passValue)) {
        passError.textContent = "Password must contain at least one special character ";
        valid = false;
    } 

    if(valid)
    {
        let user=JSON.parse(localStorage.getItem('signupData'))
        if(!user)
        {
            return alert('No user found, please signin')
        }

        if(mailValue===user.email && passValue===user.password)
        {
            alert("login successfull")
            localStorage.setItem("loggedInUser", user.username); 
            window.location.href="Homepage.html"
        }
        else
        {
            alert("invalid credentials")
        }
    }


})
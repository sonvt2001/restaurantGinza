var isCheckEye = 0;
const password = document.getElementById('password');
const toggleEye = document.getElementById('toggleEye');
const inputs = document.querySelectorAll('.form__control');
const messages = document.querySelectorAll('.form__message');
const groupForm = document.querySelectorAll('.form__group');



// Switch show/hide password

function showPassword() {
    password.setAttribute('type', 'text');
}

function hidePassword() { 
    password.setAttribute('type', 'password');
}

toggleEye.addEventListener("click", function() {
    if(isCheckEye == 0) {
        isCheckEye = 1;
        showPassword();
    }
    else {
        isCheckEye = 0;
        hidePassword();
    }
    this.classList.toggle('fa-eye')
})

// Validate input emty ?

function checkLengthInput () {
    for ( var i = 0 ; i < inputs.length; i++) {
        if( inputs[i].value !== "") {
            messages.forEach(function(message, indexMessage){
                if( i === indexMessage ) {
                    message.innerHTML = "";
                }
            })
        }
    }
}

function validate() {
    inputs.forEach(function(input, indexInput){
        input.onblur = function() {
            messages.forEach(function(message, indexMessage){
                if( indexInput === indexMessage ) {
                    message.innerHTML = "Please fill in this field.";
                }
                checkLengthInput();
            })
        };
    })
}

validate()




// check register

function registerSubmit(e) {
    event.preventDefault();
    var username = document.querySelector('#username').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
        
    var users = {
        username: username,
        email: email,
        password: password
    }

    if ( username === "" || email === "" || password === "" )  {
       toastError();
    }
    else {
        toastSuccess();
        var userFromJSON = JSON.stringify(users);
        localStorage.setItem("users", userFromJSON);
        setTimeout('redirectLogin()', 3000)
    }
}

// check login

function loginSubmit (e) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var getUserJson = localStorage.getItem("users")
    var userFromString = JSON.parse(getUserJson)

    
    if( userFromString === null ) {
        toastWarn();
    }
    else if( userFromString.email == email && userFromString.password == password) {
        toastLogin()
        setTimeout('redirectHome()',2000)
    }
    else{
        toastCheckInfoLogin()
    }
}


function showUserName() {
    var getUserName = JSON.parse(localStorage.getItem("users")).username;
    var x = document.getElementById("btnLogin");
    x.innerText = "Hello, " + getUserName;
    var i = document.getElementById("logOut");
    i.style.display = "block";

    i.onclick = function () {
        x.innerText = "Login";
        i.style.display = "none";
    }
}

// redirect

function redirectHome() {
    window.location = "http://127.0.0.1:5500/index.html"
}

function redirectLogin() {
    window.location = "http://127.0.0.1:5500/signIn.html"
}


function redirectRegister() {
    setTimeout(function() {
        window.location = "http://127.0.0.1:5500/signUp.html"
    },1000)
}

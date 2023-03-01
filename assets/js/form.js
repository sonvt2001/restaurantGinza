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
        setTimeout(function(){
            window.location.href = "signIn.html"
        },3000)
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
        setTimeout(function(){
            window.location.href = "/index.html"
        },2000)
    }
    else{
        toastCheckInfoLogin()
    }
}


function showUserName() {
    var getUserName = JSON.parse(localStorage.getItem("users")).username;
    var x = document.getElementById("btnLogin");
    var m = document.getElementById("btnLogin--mobile");
    x.innerText = "Hello, " + getUserName;
    m.innerText = getUserName;
    var i = document.getElementById("logOut");
    var iM = document.getElementById("logOut--mobile");
    i.style.display = "block";
    iM.style.display = "block";
    m.classList.add("not__active");
    x.classList.add("not__activePC");

    i.onclick = function () {
        x.innerText = "Login";
        i.style.display = "none";
        x.classList.remove("not__activePC")
    }

    iM.onclick = function () {
        m.innerText = "Login";
        iM.style.display = "none";
        m.classList.remove("not__active")
    }
}


function register() {
    window.location.href = "signUp.html";
}

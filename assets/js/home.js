const line = document.querySelector('.nav__list .line');
const navList = document.querySelectorAll('.nav__list--item');
const tabActive = document.querySelector('.nav__list--item.active');
const listMenu = document.querySelector('.nav__list--responsive');
const listMenuItem = document.querySelector('.nav__list');
const iconMenu = document.getElementById('iconMenu');
const bookBtn = document.querySelector(".book__btn");

bookBtn.onclick = () => {
    location.href = '/view/contact.html';
}

function bookTable() {
    document.write(`
            <body style="background: #f6f5f5"></body>
            <div 
                  style="background: #00CC99; 
                        display: flex; 
                        flex-direction: column; 
                        justify-content: center; 
                        align-items: center; width: 50%;
                        padding: 50px;
                        margin: 230px auto;border: 3px solid green;
                        border-radius: 10px;
            ">
                  <h1 style="color: #fff;">
                        Successful!
                  </h1>
                  <button class="btnBackHome" onclick="backHome()"
                  style="padding: 10px;
                        border: none;
                        outline: none;
                        border-radius: 10px;
                        font-size: 0.9rem;
                        color: #888;
                        cursor: pointer; ">
                              Back to Home
                  </button>
            </div>
      `)
}

function backHome() {
    location.href = "/index.html";
}

function loginAccount() {
    setTimeout(function () {
        window.location.href = "/view/signIn.html"
    },500)
}

function switchMenuPage() {
    setTimeout(function () {
        window.location.href = "/view/menu.html"
    },500)
}

function shopCart() {
    setTimeout(function () {
        window.location.href = "view/cart.html"
    },500)
}

// Tab UI

function tabLine() {
    line.style.width = tabActive.offsetWidth + 'px';
    line.style.left = tabActive.offsetLeft + 'px';

    navList.forEach(function(list){
        list.onclick = function() {
            document.querySelector('.nav__list--item.active').classList.remove('active');
            line.style.width = this.offsetWidth + 'px';
            line.style.left = this.offsetLeft + 'px';
            this.classList.add('active');
        }
    });
}

tabLine();


// show & hide the tab menu list on click

iconMenu.onclick = function() {
    if ( listMenuItem.style.display === "none" ) {
        listMenuItem.style.display = "block"
        this.classList.remove('fa-list');
        this.classList.add('fa-arrow-left');
        this.style.color = "#333"
        this.style.fontSize = "1.5rem"
    }else {
        listMenuItem.style.display = "none";
        this.classList.remove('fa-arrow-left');
        this.classList.add('fa-list');
        this.style.color = "#fff"
        this.style.fontSize = "2rem"
    }
}





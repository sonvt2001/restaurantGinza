const line = document.querySelector('.nav__list .line');
const navList = document.querySelectorAll('.nav__list--item');
const tabActive = document.querySelector('.nav__list--item.active');
const listMenu = document.querySelector('.nav__list--responsive');
const listMenuItem = document.querySelector('.nav__list');
const iconMenu = document.getElementById('iconMenu');


function loginAccount() {
    setTimeout(function () {
        window.location.href = "signIn.html"
    },500)
}

function switchMenuPage() {
    setTimeout(function () {
        window.location.href = "menu.html"
    },500)
}

function shopCart() {
    setTimeout(function () {
        window.location.href = "cart.html"
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


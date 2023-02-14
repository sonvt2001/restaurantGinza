const line = document.querySelector('.nav__list .line');
const navList = document.querySelectorAll('.nav__list--item');
const tabActive = document.querySelector('.nav__list--item.active');
const listMenu = document.querySelector('.nav__list--responsive');
const listMenuItem = document.querySelector('.nav__list');
const iconMenu = document.getElementById('iconMenu');

const isCheckLogin = 0;


// function loginAccount() {
//     redirectLoginPage();
// }

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
        this.classList.add('fa-xmark');
    }else {
        listMenuItem.style.display = "none";
        this.classList.remove('fa-xmark');
        this.classList.add('fa-list');
    }
}

    // this.classList.toggle('fa-xmark')


// redirect

// function redirectLoginPage() {
//     setTimeout(function() {
//         window.location = "signIn.html"
//     },1000)
// }

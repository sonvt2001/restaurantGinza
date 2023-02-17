const carts = document.querySelectorAll('.btn__order');
const numberCartInBag = document.querySelector('.quantityCart')
const totalQuantyProductInCart = document.querySelector('.totalQuantyProductInCart')


for ( let i = 0; i < carts.length; i++ ) {
    carts[i].addEventListener('click', () => {
        addCart();
    })
}

function loadNumberCart() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        numberCartInBag.textContent = productNumbers;
    }
}
loadNumberCart()

function addCart() { 
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        numberCartInBag.textContent = productNumbers + 1;
    }else {
        localStorage.setItem('cartNumbers', 1);
        numberCartInBag.textContent = 1;
    }
}


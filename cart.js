const carts = document.querySelectorAll('.btn__order');
const numberCartInBag = document.querySelector('.quantityCart')
const verbItem = document.querySelector('.verbItem');
const cartItems = document.querySelector('#cartItem');
const totalPriceCart = document.querySelector('#totalPrice');
const productContainer = document.querySelector('#cartItem');


let products = [
    {
        name: "Dumplings",
        price : 8,
        desc: "Choose from vegetable, chicken or pork filling. Served with dipping sauce and garnish.",
        path: "assets/img/starters1.jpg",
        inCart: 0,
        tag: "dumplings",
        totalPrice: 8
    },
    {
        name: "Chef's Special",
        price : 8,
        desc: "Avocado, lime, salmon, mushrooms and garnish served with pickled ginger and spring onions.",
        path: "assets/img/starters2.jpg",
        inCart: 0,
        tag: "chef'sSpecial",
        totalPrice: 8

    },
    {
        name: "Vegetable Pho",
        price : 8,
        desc: "Ginza Pho is based on a family recipe that's been handed down for generations. It's a spicy, light and aromatic noodle soup.",
        path: "assets/img/img-dishes1.jpg",
        inCart: 0,
        tag:"vegetablePho",
        totalPrice: 8
    },
    {
        name: "Tonkatsu Ramen",
        price : 7,
        desc: "Our bespoke ramen comes with handmade noodles, a wide array of toppings to choose from and homemade broth.",
        path: "assets/img/img-dishes2.jpg",
        inCart: 0,
        tag:"tonkatsuRamen",
        totalPrice: 7
    },
    {
        name: "Teriyaki Donburi",
        price: 10,
        desc: "A crown pleaser, our homemade teriyaki sauce served with chicken or tofu and greens.",
        path: "assets/img/bowls2.jpg",
        inCart: 0,
        tag: "teriyakiDonburi",
        totalPrice: 10
    },
    {
        name: "Vermicelli Donburi",
        price: 9,
        desc: "Modern fusion dish combining rice noodles with a classic rice bowl. Vegetarian option available.",
        path: "assets/img/bowls1.jpg",
        inCart: 0,
        tag:"vermicelliDonburi",
        totalPrice: 9
    },
    {
        name: "Philadelphia Roll",
        price : 8,
        desc: "A modern classic. Sushi roll with salmon, avocado, cream cheese, and surimi sticks.",
        path: "assets/img/sushi1.jpg",
        inCart: 0,
        tag:"philadelphiaRoll",
        totalPrice: 8
    },
    {
        name: "San Francisco Roll",
        price : 7,
        desc: "Inside out roll with surimi, tuna, cream cheese, sesame seeds and fried onions.",
        path: "assets/img/sushi2.jpg",
        inCart: 0,
        tag:"sanFranciscoRoll",
        totalPrice: 7
    },
    {
        name: "Dragon Roll",
        price : 9,
        desc: "Inside out roll with fried king prawns, avocado, Japanese omelet and cream cheese.",
        path: "assets/img/sushi3.jpg",
        inCart: 0,
        tag:"dragonRoll",
        totalPrice: 9
    },
    {
        name: "Nigiri Plate",
        price : 15,
        desc: "A selection of our finest nigiri: choose from salmon, tuna, tilapia, surimi, prawns and vegetarian options.",
        path: "assets/img/sushi4.jpg",
        inCart: 0,
        tag:"nigiriPlate",
        totalPrice: 15
    },
    {
        name: "Sapporo Beer",
        price : 8.50,
        desc: "Premium Japanese beer.",
        path: "assets/img/drink1.jpg",
        inCart: 0,
        tag:"sapporoBeer",
        totalPrice: 8.50
    },
    {
        name: "Kokuryu Sake",
        price : 8.50,
        desc: "Daidinjo sake with a mild aroma and subtle floral notes.",
        path: "assets/img/drink2.jpg",
        inCart: 0,
        tag: "kokuryuSake",
        totalPrice: 8.50
    },
    {
        name: "Tozai Sake",
        price : 31.50,
        desc: "Smooth, fruity, and cloudy sake, perfect for pairing.",
        path: "assets/img/drink3.jpg",
        inCart: 0,
        tag: "tozaiSake",
        totalPrice: 31.50
    },
    {
        name: "Juyodai Sake",
        price : 35.50,
        desc: "An easy-drinking premium sake with a rich flavor.",
        path: "assets/img/drink4.jpg",
        inCart: 0,
        tag: "juyodaiSake",
        totalPrice: 35.50
    }
]



for ( let i = 0; i < carts.length; i++ ) {
    carts[i].addEventListener('click', () => {
        addCart(products[i]);
        totalPrice(products[i]);
    })
}

function loadNumberCart() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        numberCartInBag.textContent = productNumbers;
        if(productNumbers > 1) {
            verbItem.textContent = ' items in cart.'
        }
        else if ( productNumbers < 1) {
            verbItem.textContent = ' item in cart.'
            productContainer.innerHTML += `
            <div class="img__emtyCart">
                <img class="col-xl-12" src="./assets/img/cartemty.png" alt="Image Cart is Empty" />
            </div>
        `
        }
    }
}
loadNumberCart()

function totalPriceProductInCart() {
    let priceAllProducts = localStorage.getItem('totalPrice');
    if(priceAllProducts != null) {
        totalPriceCart.textContent = "$" + priceAllProducts;
    }else {
        totalPriceCart.textContent = "$0";
    }
}
totalPriceProductInCart()

function addCart(product) { 
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        numberCartInBag.textContent = productNumbers + 1;
    }else {
        localStorage.setItem('cartNumbers', 1);
        numberCartInBag.textContent = 1;
    }

    setItemCart(product);
}

function setItemCart(product) {

    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);
    if( cartItems != null ) {
        if( cartItems[product.tag] == undefined ) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        } 
    }

    localStorage.setItem("productInCart", JSON.stringify(cartItems));
}

function totalPrice(product) {
    let cartCost = localStorage.getItem("totalPrice");

    if(cartCost != null ) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalPrice", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalPrice", product.price);
    }
    
}


function renderItemCartInBag() {
    let getItem = localStorage.getItem("productInCart")
    getItem = JSON.parse(getItem)

    if(getItem && productContainer) {
        Object.values(getItem).map( item => {
            productContainer.innerHTML += `
            <div class="thumails row">
                    <div class="col-xl-3 img__product">
                        <img src="${item.path}" alt="">
                    </div>
                    <div class="col-xl-4 group__info">
                        <div class="name__product">${item.name}</div>
                        <div class="price__product">$${item.price}</div> 
                    </div>
                    <div class="col-xl-1 quality">
                        <i class="plusItem fa-solid fa-plus"></i>
                        <span class="quantity">${item.inCart}</span>
                        <i class="minusItem fa-solid fa-minus"></i>
                    </div>
                    <div class="col-xl-1 totalPriceItem">
                        <span class="priceItemTotal">$${item.totalPrice}</span>
                    </div>
                    <div class="col-xl-1 remove">
                        <i onclick="removeItemInCart()" id="removeItem" class="fa-solid fa-trash"></i>
                    </div>
                </div>
            `
        })
    }
    else {
        productContainer.innerHTML += `
            <div class="img__emtyCart">
                <img class="col-xl-12" src="./assets/img/cartemty.png" alt="Image Cart is Empty" />
            </div>
        `
    }
}

renderItemCartInBag()

const plusItem = document.querySelectorAll(".plusItem");
const minusItem = document.querySelectorAll(".minusItem");
const priceItemTotal = document.querySelectorAll('.priceItemTotal');
const quantityItem = document.querySelectorAll('.quantity');
const removeItem = document.querySelectorAll('#removeItem');


let inCartQuantity = localStorage.getItem("productInCart");
inCartQuantity = JSON.parse(inCartQuantity);

let getPrice = localStorage.getItem("totalPrice");
getPrice = JSON.parse(getPrice);

let getCartNumber = localStorage.getItem("cartNumbers");
getCartNumber = JSON.parse(getCartNumber);

function minusItemInCart() {
    for ( let j = 0 ; j < minusItem.length ; j++ ) {
        minusItem[j].onclick = function () {
            Object.values(inCartQuantity).forEach((quantity1, index1) => {
                if( index1 === j) {
                   quantityItem.forEach((num1, numIndex1) => {
                        if( numIndex1 === index1){
                            num1.textContent = quantity1.inCart -= 1;
                            inCartQuantity = {
                                ...inCartQuantity,
                                [quantity1.tag]: quantity1
                            }
                            inCartQuantity[quantity1.tag].inCart +1;
                            inCartQuantity[quantity1.tag].totalPrice = inCartQuantity[quantity1.tag].price*inCartQuantity[quantity1.tag].inCart;
                            localStorage.setItem("productInCart", JSON.stringify(inCartQuantity));

                            if( inCartQuantity[quantity1.tag].inCart === 1 ) {
                                minusItem[j].classList.add("disabled");
                            }
                        }
                            priceItemTotal.forEach((price1, priceIndex1) => {
                                if( priceIndex1 === index1) {
                                    price1.textContent = "$" + inCartQuantity[quantity1.tag].price;
                                    totalPriceCart.textContent = "$" + Math.abs(quantity1.price - getPrice);
                                }
                            })
                            totalPriceMinus(quantity1)
                })    
                }
            })
        }
    }
}

function plusItemInCart() {
    for ( let i = 0 ; i < plusItem.length ; i++ ) {
        plusItem[i].onclick = function () {
            Object.values(inCartQuantity).forEach((quantity, index) => {
                if( index === i) {
                   quantityItem.forEach((num, numIndex) => {
                        if( numIndex === index){
                            num.textContent = quantity.inCart += 1;
                            inCartQuantity = {
                                ...inCartQuantity,
                                [quantity.tag]: quantity
                            }
                            inCartQuantity[quantity.tag].inCart +1;
                            inCartQuantity[quantity.tag].totalPrice = inCartQuantity[quantity.tag].price*inCartQuantity[quantity.tag].inCart;
                            localStorage.setItem("productInCart", JSON.stringify(inCartQuantity));
                        }
                            priceItemTotal.forEach((price, priceIndex) => {
                                if( priceIndex === index) {
                                    price.textContent = "$" +  inCartQuantity[quantity.tag].price;
                                    totalPriceCart.textContent = "$" + (quantity.price + getPrice); 
                                }
                            })
                        totalPricePlus(quantity);
                })    
                }
            })
        }
    }
}


function removeItemInCart() {
    for ( let r = 0; r < removeItem.length; r++) {
        Object.values(inCartQuantity).forEach((item, index) => {
            if( r == index ) { 
                removeItem[index].onclick = () => {
                    Object.values(inCartQuantity).forEach((item2, index2) => {
                        if ( index2 === index ) {
                            if ( item2.tag == item.tag ) {
                                delete inCartQuantity[item2.tag]
                                 console.log(true);
                                 totalPriceMinus(item2)
                                 totalCartNumber()
                                //  location.reload();
                            }
                        }
                    })
                        localStorage.setItem("productInCart", JSON.stringify(inCartQuantity));
                }
            }
        })
    }
}

removeItemInCart()


function totalPricePlus(quantity) {
    localStorage.setItem("totalPrice", quantity.price + getPrice);
    location.reload();
}

function totalPriceMinus(quantity1) {
    localStorage.setItem("totalPrice", Math.abs(quantity1.price - getPrice));
    location.reload();
}

function totalCartNumber() {
    localStorage.setItem("cartNumbers", getCartNumber - 1);
    location.reload();
}

function changQuantity(){
    plusItemInCart()
    minusItemInCart()
}

changQuantity()

function pageBill() {
    location.href ="bills.html";
}


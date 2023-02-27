function randomId() {
    return Math.floor(Math.random() * 100000)
}


const startersProducts = [
    {
        id_product: randomId(),
        name: "Dumplings",
        price : "8",
        desc: "Choose from vegetable, chicken or pork filling. Served with dipping sauce and garnish.",
        path: "assets/img/starters1.jpg"
    },
    {
        id_product: randomId(),
        name: "Chef's Special",
        price : "8",
        desc: "Avocado, lime, salmon, mushrooms and garnish served with pickled ginger and spring onions.",
        path: "assets/img/starters2.jpg"
    },
]

const bowlsProducts = [
    {
        id_product: randomId(),
        name: "Vegetable Pho",
        price : "8",
        desc: "Ginza Pho is based on a family recipe that's been handed down for generations. It's a spicy, light and aromatic noodle soup.",
        path: "assets/img/img-dishes1.jpg"
    },
    {
        id_product: randomId(),
        name: "Tonkatsu Ramen",
        price : "7",
        desc: "Our bespoke ramen comes with handmade noodles, a wide array of toppings to choose from and homemade broth.",
        path: "assets/img/img-dishes2.jpg"
    },
    {
        id_product: randomId(),
        name: "Teriyaki Donburi",
        price: "10",
        desc: "A crown pleaser, our homemade teriyaki sauce served with chicken or tofu and greens.",
        path: "assets/img/bowls2.jpg"
    },
    {
        id_product: randomId(),
        name: "Vermicelli Donburi",
        price: "9",
        desc: "Modern fusion dish combining rice noodles with a classic rice bowl. Vegetarian option available.",
        path: "assets/img/bowls1.jpg"
    }
]

const sushiProducts = [
    {
        id_product: randomId(),
        name: "Philadelphia Roll",
        price : "8",
        desc: "A modern classic. Sushi roll with salmon, avocado, cream cheese, and surimi sticks.",
        path: "assets/img/sushi1.jpg"
    },
    {
        id_product: randomId(),
        name: "San Francisco Roll",
        price : "7",
        desc: "Inside out roll with surimi, tuna, cream cheese, sesame seeds and fried onions.",
        path: "assets/img/sushi2.jpg"
    },
    {
        id_product: randomId(),
        name: "Dragon Roll",
        price : "9",
        desc: "Inside out roll with fried king prawns, avocado, Japanese omelet and cream cheese.",
        path: "assets/img/sushi3.jpg"
    },
    {
        id_product: randomId(),
        name: "Nigiri Plate",
        price : "15",
        desc: "A selection of our finest nigiri: choose from salmon, tuna, tilapia, surimi, prawns and vegetarian options.",
        path: "assets/img/sushi4.jpg"
    }
]

const drinksProducts = [
    {
        id_product: randomId(),
        name: "Sapporo Beer",
        price : "8.50",
        desc: "Premium Japanese beer.",
    },
    {
        id_product: randomId(),
        name: "Kokuryu Sake",
        price : "8.50",
        desc: "Daidinjo sake with a mild aroma and subtle floral notes.",
    },
    {
        id_product: randomId(),
        name: "Tozai Sake",
        price : "31.50",
        desc: "Smooth, fruity, and cloudy sake, perfect for pairing.",
    },
    {
        id_product: randomId(),
        name: "Juyodai Sake",
        price : "35.50",
        desc: "An easy-drinking premium sake with a rich flavor.",
    }
]


const dishesPopular = document.getElementById("dishes__bowls");
const dishesStarters = document.getElementById("dishes__starters");
const dishesSushis = document.getElementById("dishes__sushi");
const drinks = document.getElementById("dishes__drink");


function render() {
    const htmlsBowls = bowlsProducts.map(product => {
        return `<div class="col-xl-5 col-md-12 col-sm-12 popular__menu">
         <img class=" popular__img" src="${product.path}" alt="">
        <div class="col-md-8 col-sm-12 popular__group">
            <div class="group__title">
                <div class="popular__name">${product.name} Ramen</div>
            </div>
            <div class="popular__info">
                <div class="popular__text">${product.desc}</div>
                <button class="btn__order">$${product.price}</button>
            </div>
        </div>
         </div>`
    })
    dishesPopular.innerHTML = htmlsBowls.join('');

    const htmlsStarters = startersProducts.map(productStart => {
        return `<div class="col-xl-5 col-md-12 col-sm-12 popular__menu">
         <img class=" popular__img" src="${productStart.path}" alt="">
        <div class="col-md-8 col-sm-12 popular__group">
            <div class="group__title">
                <div class="popular__name">${productStart.name} Ramen</div>
            </div>
            <div class="popular__info">
                <div class="popular__text">${productStart.desc}</div>
                <button class="btn__order">$${productStart.price}</button>
            </div>
        </div>
         </div>`
        })
    dishesStarters.innerHTML = htmlsStarters.join('');

    const htmlsSushis = sushiProducts.map(productSushi => {
        return `<div class="col-xl-5 col-md-12 col-sm-12 popular__menu">
         <img class=" popular__img" src="${productSushi.path}" alt="">
        <div class="col-md-8 col-sm-12 popular__group">
            <div class="group__title">
                <div class="popular__name">${productSushi.name} Ramen</div>
            </div>
            <div class="popular__info">
                <div class="popular__text">${productSushi.desc}</div>
                <button class="btn__order">$${productSushi.price}</button>
            </div>
        </div>
         </div>`
        })
    dishesSushis.innerHTML = htmlsSushis.join('');

        const htmlsDrinks = drinksProducts.map(productDrink => {
            return `<div class="col-xl-5 col-md-12 col-sm-12 popular__menu">
            <div class="col-md-8 col-sm-12 popular__group">
                <div class="group__title">
                    <div class="popular__name">${productDrink.name} Ramen</div>
                </div>
                <div class="popular__info">
                    <div class="popular__text">${productDrink.desc}</div>
                    <button class="btn__order">$${productDrink.price}</button>
                </div>
            </div>
             </div>`
            })
    drinks.innerHTML = htmlsDrinks.join('');
}
render()
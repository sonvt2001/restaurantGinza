
const products = [
    {
        id_category: "",
        id_product: 1,
        name: "Vegetable Pho",
        price : "$8",
        desc: "Ginza Pho is based on a family recipe that's been handed down for generations. It's a spicy, light and aromatic noodle soup.",
        path: "assets/img/img-dishes1.jpg"
    },
    {
        id_category: "",
        id_product: 2,
        name: "Tonkatsu Ramen",
        price : "$7",
        desc: "Our bespoke ramen comes with handmade noodles, a wide array of toppings to choose from and homemade broth.",
        path: "assets/img/img-dishes2.jpg"
    },

]


const dishesPopular = document.getElementById("dishes__popular");
// const div = document.createElement("div");
// div.classList.add("col-5","popular__menu");
function render() {
    const htmls = products.map(product => {
        return `<div class="col-xl-5 col-md-12 col-sm-12 popular__menu">
         <img class=" popular__img" src="${product.path}" alt="">
        <div class="col-md-8 col-sm-12 popular__group">
            <div class="group__title">
                <div class="popular__name">${product.name} Ramen</div>
            </div>
            <div class="popular__info">
                <div class="popular__text">${product.desc}</div>
                <button class="btn__order">${product.price}</button>
            </div>
        </div>
         </div>`
    })
   
    dishesPopular.innerHTML = htmls.join('');
}
render()
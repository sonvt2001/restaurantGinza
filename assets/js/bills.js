const user = document.querySelector('#user');
const productByUser = document.querySelector('#productByUser');
const billTotal = document.querySelector('#billTotal');

let getDataUser = localStorage.getItem('users');
getDataUser = JSON.parse(getDataUser)

let getProductByUser = localStorage.getItem('productInCart');
getProductByUser = JSON.parse(getProductByUser)

var getItems = Object.values(getProductByUser)

let getTotalAllPrice = localStorage.getItem('totalPrice');
getTotalAllPrice = JSON.parse(getTotalAllPrice)

let randomCostShip = Math.floor(Math.random() * 10)

let sumPriceBill = getTotalAllPrice + randomCostShip;


function renderUser() { 
   user.innerHTML = `
    <input type="text" name="nameUser" id="nameUser" value="${getDataUser.username}" placeholder="Your name...">
    <input type="text" name="phoneUser" id="phoneUser" placeholder="Your phone...">
    <input type="text" name="addressUser" id="addressUser" placeholder="Your address...">
   `

   

   getItems.map( (item) => {
      productByUser.innerHTML += `
               <div  class="thumails">
                  <div class="col-xl-2 img__product">
                        <img src="${item.path}" alt="">
                        <div class="name__product--mobile">${item.name}</div>
                  </div>
                  <div class="col-xl-4 group__info">
                        <div class="name__product">${item.name}</div>
                        <div class="price__product">$${item.price}</div> 
                  </div>
                  <div class="col-xl-3 quality">
                        <span class="quantity">${item.inCart}</span>
                  </div>
                  <div class="col-xl-1 totalPriceItem">
                        <span class="priceItemTotal">$${item.totalPrice}</span>
                  </div>
                </div>
   `      
   })

   billTotal.innerHTML = `
      <div class="payShip">
            <h5>Ship</h5>
            <span>$${randomCostShip}</span>
      </div>
      <div class="totalPricePay">
            <h5>Total price</h5>
            <span>$${getTotalAllPrice}</span>
      </div>
      <div class="totalPricePay">
            <h5>Total payment</h5>
            <span>$${sumPriceBill}</span>
      </div>

      <div onclick="paymentBill()" class="btn__pay btn btn-outline-success">Payment</div>
   `

}

renderUser()

function paymentBill() {
      const phoneUser = document.querySelector('#phoneUser').value
      const addressUser = document.querySelector('#addressUser').value
     
      getDataUser = {
            ...getDataUser,
            phone: phoneUser,
            address : addressUser,
            ...getProductByUser
      }

      localStorage.setItem("bills", JSON.stringify(getDataUser));


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
                        Successful payment!
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
     localStorage.removeItem("productInCart");
     localStorage.removeItem("totalPrice");
     localStorage.removeItem("cartNumbers");
}


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
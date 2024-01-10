let item_arr = [
    {
        item_name: "Green Tea",
        Size: "Small",
        price: 100,
        url: "https://images.unsplash.com/photo-1609951651556-5334e2706168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRyaW5rfGVufDB8fDB8fHww"
    },

    {
        item_name: "Tea",
        Size: "Large",
        price: 50,
        url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVhfGVufDB8fDB8fHww"
    },

    {
        item_name: "Black Coffe",
        Size: "Mideum",
        price: 80,
        url: "https://images.unsplash.com/photo-1621267860478-dbdd589372db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D"
    },

    {
        item_name: "Capachino",
        Size: "Extra Large",
        price: 120,
        url: "https://plus.unsplash.com/premium_photo-1669374537636-518629de3b85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcGFjY2lub3xlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        item_name: "Orange Juice",
        Size: "Small",
        price: 100,
        url: "https://images.unsplash.com/photo-1577680716097-9a565ddc2007?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D"
    },

    {
        item_name: "Chocolate Smothiee",
        Size: "Large",
        price: 200,
        url: "https://images.unsplash.com/photo-1616269267068-a94048945ded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvY29sYXRlJTIwc21vb3RoaWV8ZW58MHx8MHx8fDA%3D"
    },

    {
        item_name: "Muffins",
        Size: "1pc",
        price: 140,
        url: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFzdHJpZXN8ZW58MHx8MHx8fDA%3D"
    },

    {
        item_name: "Pasta",
        Size: "Half Plate",
        price: 160,
        url: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D"
    },
]
let productGallery = document.querySelector(".product-gallery");
function showProducts() {
    item_arr.forEach((item) => {
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "product-card");

        productCard.innerHTML = `
        <div class="card-img">
            <img src=${item.url} alt="" srcset="">
        </div>
        <div class="card-info">
            <div class="card-content">
                <div class="card-name">${item.item_name}</div>
                <div class="card-quantity">${item.Size}</div>
                <div class="card-price">${item.price} Rs.</div>
            </div>
            <div class="card-icons">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-cart-plus"></i>
            </div>
        </div>`;
        productGallery.appendChild(productCard);
    })
}

showProducts();
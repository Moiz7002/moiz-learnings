let cart = JSON.parse(localStorage.getItem("cart")) || [];

let totalItems = document.getElementById("total-items");
let totalAmount = document.getElementById("total-amount");
let productList = document.getElementById("product-list");

let total = 0;

totalItems.innerText = cart.length;

cart.forEach((product) => {

    total += product.price;

    let li = document.createElement("li");

    li.innerText = `${product.name} - ₹${product.price}`;

    productList.appendChild(li);
});

totalAmount.innerText = total;
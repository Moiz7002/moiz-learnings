let cart = JSON.parse(localStorage.getItem("cart")) || [];

let btns = document.querySelectorAll(".buy-btn");

let cartList = document.getElementById("cart-list");
let totalItems = document.getElementById("total-items");
let totalPrice = document.getElementById("total-price");

function addToCart(e) {
    let item = e.target.parentElement;

    let productName = item.querySelector("h3").innerText;
    let productPrice = item.querySelector(".price").innerText;
    let price = Number(productPrice.replace("₹", ""));

    let existingProduct = cart.find(
        product => product.name === productName
    );

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added To Cart!");
    displayCart();
}

function displayCart() {
    if (!cartList) return
    cartList.innerHTML = "";
    let total = 0;
    let itemCount = 0;

    cart.forEach((product, index) => {
        total += product.price * product.quantity;
        itemCount += product.quantity;

        let li = document.createElement("li");

        li.innerHTML = `
            ${product.name} - ₹${product.price}
            × ${product.quantity}
            = ₹${product.price * product.quantity}
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartList.appendChild(li);
    });

    totalItems.innerText = itemCount;
    totalPrice.innerText = `₹${total}`;
}

function removeItem(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

btns.forEach((btn) => {
    btn.addEventListener("click", addToCart);
});

displayCart();
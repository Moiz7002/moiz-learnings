let loginMethod = document.getElementById("loginMethod");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let loginBtn = document.getElementById("loginBtn");
let nameInput = document.getElementById("name");
let extraInfo = document.getElementById("extraInfo");

loginMethod.addEventListener("change", function () {
    const method = loginMethod.value;

    if (method === "email") {
        emailInput.classList.remove("hidden");
        phoneInput.classList.add("hidden");
        phoneInput.value = "";
    } else if (method === "phone") {
        phoneInput.classList.remove("hidden");
        emailInput.classList.add("hidden");
        emailInput.value = "";
    } else {
        emailInput.classList.add("hidden");
        phoneInput.classList.add("hidden");
    }
});

loginBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const method = loginMethod.value;
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name) return alert("Enter name");
    if (!method) return alert("Select method");

    if (method === "email" && !email) return alert("Enter email");
    if (method === "phone" && !phone) return alert("Enter phone");


    window.location.href = "index1.html";
});
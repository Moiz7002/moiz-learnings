let loginMethod = document.getElementById("loginMethod");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let loginBtn = document.getElementById("loginBtn");
let nameInput = document.getElementById("name");
let verifyBtn = document.getElementById("verifyBtn");
let otpSection = document.getElementById("otpSection");
let otpInputs = document.querySelectorAll(".otp");

let generatedOTP = "";

loginMethod.addEventListener("change", function () {

    const method = loginMethod.value;

    if (method === "email") {
        emailInput.classList.remove("hidden");
        phoneInput.classList.add("hidden");
        phoneInput.value = "";
    }

    else if (method === "phone") {
        phoneInput.classList.remove("hidden");
        emailInput.classList.add("hidden");
        emailInput.value = "";
    }

    else {
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

    generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();

    console.log(generatedOTP);

    otpSection.classList.remove("hidden");

});

verifyBtn.addEventListener("click", function () {

    let enteredOTP = "";

    otpInputs.forEach(function (input) {

        enteredOTP += input.value;

    });

    if (enteredOTP === generatedOTP) {

        alert("Login Successful");

        window.location.href = "MovieExplorer.html";

    }

    else {

        alert("Wrong OTP");

    }

});

otpInputs.forEach(function (input, index) {

    input.addEventListener("input", function () {

        if (input.value.length === 1 && index < otpInputs.length - 1) {

            otpInputs[index + 1].focus();

        }

    });

});
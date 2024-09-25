const emailInput = document.querySelector("#email");
const submitButton = document.querySelector(".submit-btn");
const form = document.querySelector("form");
const error = document.querySelector(".error");


emailInput.addEventListener('invalid', (e) => {
    e.preventDefault()
    e.target.setCustomValidity("Please enter a valid email address")
    error.textContent = e.target.validationMessage
})

emailInput.addEventListener('change', (e) => {
    e.target.setCustomValidity("")
    error.textContent = ""
})

const contactForm = document.querySelector("#contactForm")
const fullNameInput = document.querySelector("#fullName")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phoneNumber")
const messageTextarea = document.querySelector("#meassage")
const submitBtn = document.querySelector("#submitBtn")
const submitMsg = document.querySelector("#submitMessage")
const groups = document.querySelectorAll(".group")
const contactContainer = document.querySelector(".contact")
const nameError = document.querySelector("#nameError")
const emailError = document.querySelector("#emailError")
const phoneError = document.querySelector("#phoneError")
const messageError = document.querySelector("#messageError")
const contactMsg = document.querySelector(".contactMsg")


contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let usernameRegex = /^[A-Za-z\s]{4,}$/g
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/
    let phoneRegex = /^\+?[0-9-\(\)\s]{7,20}$/
    let messageValue = messageTextarea.value.trim().length > 5
    let usernameValue = usernameRegex.test(fullNameInput.value)
    let emailValue = emailRegex.test(emailInput.value)
    let phoneValue = phoneRegex.test(phoneInput.value.trim())

    let isValid = true;


    if (!usernameValue) {
        nameError.style.opacity = "1"
        isValid = false
    }
    else nameError.style.display = "none"

    if (!emailValue) {
        emailError.style.opacity = "1"
        isValid = false
    }
    else emailError.style.display = "none"

    if (!phoneValue) {
        phoneError.style.opacity = "1"
        isValid = false
    }
    else phoneError.style.display = "none"

    if (!messageValue) {
        messageError.style.opacity = "1"
        isValid = false
    }
    else messageError.style.display = "none"

    if (isValid) {
        contactMsg.style.opacity = "1"
        contactContainer.style.opacity = "0"
        contactForm.submit()
    }

})
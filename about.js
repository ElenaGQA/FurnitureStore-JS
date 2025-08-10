const readMoreBtn = document.querySelector("#readMoreBtn")
const aboutText1 = document.querySelector("#aboutText1")
const aboutText2 = document.querySelector("#aboutText2")

aboutText2.style.display = "none"


readMoreBtn.addEventListener('click', () => {

    if (aboutText2.style.display == "none") {
        aboutText2.style.display = "block"
    }
    else {
        aboutText2.style.display = "none"
    }

    if (readMoreBtn.innerText === "Read More...") {
        readMoreBtn.innerText = "Read Less..."

    } else {
        readMoreBtn.innerText = "Read More..."
    }
})
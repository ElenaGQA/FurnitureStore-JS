const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu")


burger.addEventListener('click', () => {
    menu.classList.toggle("open")
})


window.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove("open")
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove("open")
    }
})

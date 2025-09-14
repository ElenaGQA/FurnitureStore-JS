const cart = document.querySelector(".cart")
const numberOfProducts = document.querySelector(".numberOfProducts")
const container = document.querySelector(".container")
const menuItem = document.querySelector(".menuItem")
const products = document.querySelector(".products")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close")
const cartItems = document.querySelector(".cartItems")


class Product {
    constructor(productImage, productName, productDescription, productPrice) {
        this.productImage = productImage;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
    }

    creatProductCard() {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const img = document.createElement('img');
        img.src = this.productImage;
        img.alt = this.productName;
        productDiv.appendChild(img);

        const name = document.createElement("h2");
        name.textContent = this.productName;
        productDiv.appendChild(name);

        const description = document.createElement("h4");
        description.textContent = this.productDescription;
        productDiv.appendChild(description);

        const price = document.createElement("h4");
        price.textContent = this.productPrice;
        productDiv.appendChild(price);

        const addBtn = document.createElement("button");
        addBtn.classList.add("addBtn");
        addBtn.textContent = "Add to cart";
        productDiv.appendChild(addBtn);

        addBtn.addEventListener('click', () => {
            shoppingCart.add(this.productName, this.productPrice)
            numberOfProducts.textContent++
            numberOfProducts.style.display = "block"
            alert (`The ${this.productName} is added to the cart!`)
        })

        products.appendChild(productDiv);
    }
}

let productList = [
    new Product("./Image/lineaShelf.jpg", "Linea shelf", "200cm", "890$"),
    new Product("./Image/novaShelf.jpg", "Nova shlef", "150cm", "690$"),
    new Product("./Image/aeroShelf.jpg", "Aero shelf", "180cm", "790$"),
    new Product("./Image/auraChair.jpg", "Aura Chair", "Brown leather chair", "490$"),
    new Product("./Image/havenChair.jpg", "Haven Chair", "Cozy chair", "690$"),
    new Product("./Image/vibeChair.jpg", "Vibe Chair", "Contemporary dining chair", "390$"),
    new Product("./Image/DiningTable.jpg", "Solara dining table", "220cm x 90cm oval", "1190$"),
    new Product("./Image/CoffeeTable.jpg", "Nest coffee table", "90cm round", "690$"),
    new Product("./Image/SideTable.jpg", "Loom side table", "50cm round", "390$")
]

productList.forEach(product => product.creatProductCard())

export class ShoppingCart {

    constructor() {
        this.products = [];
        this.count = 0;
    }

    add(productName, productPrice) {
        let specProduct = this.products.find(el => el.productName == productName)
        if (specProduct) {
            specProduct.count++
        }
        else {
            this.products.push({ productName, productPrice, count: 1 })
        }
    }

    display() {
        cartItems.innerHTML = ""
        this.products.forEach(el => {
            let li = document.createElement("li")
            li.textContent = `${el.productName} - ${el.count} X ${el.productPrice}`
            cartItems.appendChild(li)
        })

    }

}

let shoppingCart = new ShoppingCart();

cart.addEventListener('click', () => {
    shoppingCart.display()
    modal.style.display = "block"
})

closeBtn.addEventListener('click', () => {
    modal.style.display = "none"
})

window.addEventListener('click', (e) => {
    if (e.target == modal) modal.style.display = "none"
})


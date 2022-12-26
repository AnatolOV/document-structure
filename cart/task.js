let products = document.querySelectorAll(".product");
let productsControl;


for (let i = 0; i < products.length; i++) {
  let buttonAdd = products[i].querySelector(".product__add");
  buttonAdd.addEventListener("click", () => {
    console.log(8);
    let cartProduct = document.createElement("div");
         cartProduct.className = "cart__product";
         cartProduct.setAttribute("data-id", 0);
         let cartProductImg = document.createElement("img");
         cartProductImg.className = "cart__product-image";
         cartProductImg.setAttribute(
           "src",
           "https://static-eu.insales.ru/images/products/1/7875/257179331/4515850.jpg"
         );
         cartProduct.append(cartProductImg);
         let quantityInCart = document.createElement("div");
         quantityInCart.className = "cart__product-count";
         quantityInCart.innerText = productsQuantityValue.innerText;
         cartProduct.append(quantityInCart);
         if (quantityInCart.innerText > 0) {
           productsInCart.append(cartProduct);
         }
  });
  
}

let cart = document.querySelector("cart");

let productsInCart = document.querySelector(".cart__products");

let productsQuantityValue = products[0].querySelector(
  ".product__quantity-value"
);
for (let i = 0; i < products.length; i++) {
  products[i].querySelector(".product__quantity-value");
}


for (let i = 0; i < products.length; i++) {
  productsControl = products[i].querySelectorAll(".product__quantity-control");
  productsControl[0].onclick = () => {
    if (products[i].querySelector(".product__quantity-value").innerText > 0) {
      products[i].querySelector(".product__quantity-value").innerText--;
    }
  };

  productsControl[1].onclick = () => {
   if (products[i].querySelector(".product__quantity-value").innerText) {
     products[i].querySelector(".product__quantity-value").innerText++;
   }
  };
}

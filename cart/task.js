let products = document.querySelectorAll(".product");

for (let i = 0; i < products.length; i++) {
  let buttonAdd = products[i].querySelector(".product__add");
  buttonAdd.addEventListener("click", () => {
    let thisId = buttonAdd.closest(".product").dataset.id; 
    let thisImg = buttonAdd.closest(".product").querySelector("img").src; 
    let thisproductsQuantityValue = buttonAdd
      .closest(".product")
      .querySelector(".product__quantity-value"); 
    let cart = document.querySelector(".cart__products"); 
    let productsInCart = cart.querySelectorAll(".cart__product");
    let cartProduct;
    let cartProductImg;
    let quantityInCart;

    //при добавлении такой же позиции меняет количество
   
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].dataset.id == `${thisId}`) {
        //проверяем у каждого товара в корзине id, если есть,то увеличиваем кол-во
        productsInCart[i].querySelector(".cart__product-count").innerText =
          +productsInCart[i].querySelector(".cart__product-count").innerText +
          +thisproductsQuantityValue.innerText;
        console.log("уже содержится товар с таким id в корзине");
      }
 
      
      if (`${thisId}` != productsInCart[i].dataset.id) {
        console.log("товара нет, нужно создать");
        // if (quantityInCart.innerText > 0) {
        //cart.append(cartProduct); }

        cartProduct = document.createElement("div");
        cartProduct.className = "cart__product";
        cartProduct.setAttribute("data-id", `${thisId}`);

        cartProductImg = document.createElement("img");
        cartProductImg.className = "cart__product-image";
        cartProductImg.setAttribute("src", `${thisImg}`);
        cartProduct.append(cartProductImg);
        quantityInCart = document.createElement("div");
        quantityInCart.className = "cart__product-count";

        quantityInCart.innerText = thisproductsQuantityValue.innerText;
        cartProduct.append(quantityInCart);
        console.log(cartProduct);

        //сюда нужно условие добавления!!!

        cart.append(cartProduct);
      }
      console.log(productsInCart[i]);
    }
    
    //если корзина пустая  

    if (productsInCart.length == 0 ) {
      console.log("в корзине было пусто");
      console.log(productsInCart.length);

      cartProduct = document.createElement("div"); 
      cartProduct.className = "cart__product"; 
      cartProduct.setAttribute("data-id", `${thisId}`); 

      cartProductImg = document.createElement("img"); 
      cartProductImg.className = "cart__product-image"; 
      cartProductImg.setAttribute("src", `${thisImg}`); 
      cartProduct.append(cartProductImg); 

      quantityInCart = document.createElement("div");
      quantityInCart.className = "cart__product-count";
      quantityInCart.innerText = thisproductsQuantityValue.innerText;
      cartProduct.append(quantityInCart);

      if (quantityInCart.innerText > 0) {
        cart.append(cartProduct);
      }

      console.log(productsInCart);
    }
  });
}


//реализуем добавление/уменьшение по нажатию на +/-
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

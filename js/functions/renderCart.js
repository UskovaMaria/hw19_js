cartEl.onclick = function() {

  renderCart();
}

function renderCart() {
  const cartContainer = document.querySelector('.cart-container');
  const cartProductsContainer = document.querySelector('.cart-products');

  cartProductsContainer.innerHTML = '';

  const formatCart = formatCartData(cart);

  formatCart.forEach(productId => {
    const product = products.find(item => item.id === productId);

    if (product) {
      renderProductInCart(cartProductsContainer, product);
    }
  });

  cartContainer.style.display = 'block';
  
  const closeCartBtn = document.querySelector('.close-cart-btn');
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', function () {
      cartContainer.style.display = 'none';
    });
  }
 
}

function renderProductInCart(parentEl, dataObj) {
  const productInCart = document.createElement('div');
  productInCart.className = 'cart-product';

  const cartPhoto = document.createElement('div');
  cartPhoto.className = 'cart-product__photo';
  cartPhoto.innerHTML = dataObj.img;

  const cartName = document.createElement('p');
  cartName.className = 'cart-product__name';
  cartName.textContent = dataObj.text;

  const cartPrice = document.createElement('p');
  cartPrice.className = 'cart-product__price';
  cartPrice.textContent = dataObj.price;

  productInCart.append(cartPhoto, cartName, cartPrice);
  parentEl.appendChild(productInCart);  
}


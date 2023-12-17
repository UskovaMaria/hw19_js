function renderProducts(parentElSelector, dataArr) {
  const parentEl = doc.querySelector(parentElSelector);
  if (!parentEl) {
    console.warn(`el of selector: ${parentElSelector}, not found !!!`)
    return;
  }

  dataArr.forEach(function(product) {
    renderProduct(parentElSelector, product);
  });
}

function renderProduct(parentElSelector, dataObj) {
  const parentEl = doc.querySelector(parentElSelector);
  if (!parentEl) {
    console.warn(`el of selector: ${parentElSelector}, not found !!!`)
    return;
  }

  const product = doc.createElement('div');
  const photo = doc.createElement('div');
  const name = doc.createElement('p');
  const item = doc.createElement('div');
  const star = doc.createElement('p');
  const text = doc.createElement('p');
  const plan = doc.createElement('div');
  const circle = doc.createElement('div');
  const month = doc.createElement('p');
  const paw = doc.createElement('div');
  const priceBlock = doc.createElement('div');
  const price = doc.createElement('p');
  const btnAddToCart = doc.createElement('button');

  product.className = mainClass;
  product.dataset.id = dataObj.id;

  photo.className = `${mainClass}__photo`;
  photo.innerHTML = dataObj.img;

  name.className = `${mainClass}__name`;
  name.innerHTML = dataObj.text;
  
  item.className = `${mainClass}__item`;
  
  star.className = `star`;
  star.innerHTML = '☆';

  text.className = `promotion`;
  text.innerHTML = 'Акція';

  plan.className = `plan`;
  
  circle.className = `circle`;
  circle.innerHTML = '<img src="img/unnamed.jpg" alt="">';

  month.className = `month`;
  month.innerHTML = dataObj.text2;

  paw.className = `paw`;
  paw.innerHTML = '<img src="img/png-transparent-dog-paw-paws-animals-snout-silhouette-thumbnail.png" alt="">';

  priceBlock.className = `${mainClass}__price-block`;

  price.className = `${mainClass}__price`;
  price.innerHTML = dataObj.price;

  btnAddToCart.className = `${mainClass}__add-cart`;
  btnAddToCart.innerHTML = '<i  class="fa-solid fa-cart-plus"></i>';

  btnAddToCart.onclick = function() {
    cart.push(dataObj.id);
    updateCountItemsInCart();
  }

  priceBlock.append(price, btnAddToCart);
  plan.append(circle, month, paw);
  item.append(star, text, plan);
  product.append(photo, name, item, priceBlock);
  parentEl.append(product);
}
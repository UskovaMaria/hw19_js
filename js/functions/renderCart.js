cartEl.onclick = function() {
  renderCart();
}

function renderCart() {
  const formatCart = formatCartData(cart);
  console.log(formatCart);
}

/*

1. img Product1 1 x 100 = 100  x
2. img Product2 3 x 200 = 600  x
3. img Product3 1 x 300 = 300  x
----------------------------
total: 600

*/
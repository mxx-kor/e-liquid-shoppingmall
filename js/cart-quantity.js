const cartBtn = document.getElementById('cart-btn');

if (Object.keys(sessionStorage).length > 0) {
    let newSpan = document.createElement('span');
    let cartquantity = sessionStorage.length;
    newSpan.setAttribute('id', 'addedItem')
    newSpan.innerHTML = `(${cartquantity})`;
    cartBtn.appendChild(newSpan); 
}

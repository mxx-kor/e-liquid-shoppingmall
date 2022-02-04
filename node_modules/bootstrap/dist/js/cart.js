const cartBtn = document.getElementById('cart-btn');
const empty = document.getElementById('empty');
const img = document.getElementById('cart-img');
const contents = document.getElementById('cart-contents');
const cartNav = document.getElementById('cart-nav');

if (sessionStorage.getItem('title') != null) {
    empty.remove();
    cartNav.style.visibility = 'visible';
    let newSpan = document.createElement('span');
    let cartquantity = 1;
    newSpan.setAttribute('id', 'addedItem')
    newSpan.innerHTML = `(${cartquantity})`;
    cartBtn.appendChild(newSpan);
    let newImg = document.createElement('img');
    let newAnchor = document.createElement('a');
    let newSmall1 = document.createElement('small');
    let newSmall2 = document.createElement('small');
    let newSmall3 = document.createElement('small');
    newImg.setAttribute('src', sessionStorage.getItem('img-thumbnail'));
    newImg.setAttribute('class', "img-thumbnail")
    img.appendChild(newImg);
    newAnchor.innerHTML = sessionStorage.getItem('title');
    newAnchor.setAttribute('href', "/liquid/mtl/mtl-liquids/detox-aloe.html");
    newAnchor.setAttribute('class', "text-decoration-none text-black");
    contents.appendChild(newAnchor);
    newSmall1.innerHTML = sessionStorage.getItem('liquid-quantity');
    contents.appendChild(newSmall1);
    newSmall2.innerHTML = sessionStorage.getItem('coolings');
    contents.appendChild(newSmall2);
    newSmall3.innerHTML = sessionStorage.getItem('total');
    contents.appendChild(newSmall3);
    addXBtn()
}

function addXBtn() {
    newBtn = document.createElement('button')
    newBtn.setAttribute('class', 'btn');
    newBtn.innerHTML = '<i class="bi bi-x-lg" onclick="DeleteCart()"></i>';
    contents.appendChild(newBtn);
}

function DeleteCart() {
    sessionStorage.removeItem('title');
    sessionStorage.removeItem('total');
    sessionStorage.removeItem('coolings');
    sessionStorage.removeItem('liquid-quantity');
    sessionStorage.removeItem('img-thumbnail');
    cartNav.style.visibility = 'hidden';
    location.reload();
} 

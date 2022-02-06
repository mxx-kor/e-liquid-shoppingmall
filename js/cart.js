const cartBtn = document.getElementById('cart-btn');
const empty = document.getElementById('empty');
const img = document.getElementById('cart-img');
const contents = document.getElementById('cart-contents');
const cartNav = document.getElementById('cart-nav');

if (sessionStorage.key(1) != null) {
    for (i = 1; i < sessionStorage.length; i++) {
        let product1 = JSON.parse(sessionStorage.getItem(i));
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
        newImg.setAttribute('src', product1.imgsrc);
        newImg.setAttribute('class', "img-thumbnail")
        img.appendChild(newImg);
        newAnchor.innerHTML = product1.title;
        newAnchor.setAttribute('href', "/liquid/mtl/mtl-liquids/detox-aloe.html");
        newAnchor.setAttribute('class', "text-decoration-none text-black");
        contents.appendChild(newAnchor);
        newSmall1.innerHTML = product1.liquid_quantity;
        contents.appendChild(newSmall1);
        newSmall2.innerHTML = product1.coolings;
        contents.appendChild(newSmall2);
        newSmall3.innerHTML = product1.total;
        contents.appendChild(newSmall3);
        addXBtn()
    }
}

function addXBtn() {
    newBtn = document.createElement('button')
    newBtn.setAttribute('class', 'btn');
    newBtn.innerHTML = '<i class="bi bi-x-lg" onclick="DeleteCart()"></i>';
    contents.appendChild(newBtn);
}

function DeleteCart() {
    sessionStorage.removeItem(1);
    cartNav.style.visibility = 'hidden';
    location.reload();
} 

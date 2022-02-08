const cartBtn = document.getElementById('cart-btn');
const empty = document.getElementById('empty');
const cartNav = document.getElementById('cart-nav');
const cartContainer = document.getElementById('cart-container');

if (Object.keys(sessionStorage) != null) {
    empty.remove();
    cartNav.style.visibility = 'visible';
    let newSpan = document.createElement('span');
    let cartquantity = sessionStorage.length;
    newSpan.setAttribute('id', 'addedItem')
    newSpan.innerHTML = `(${cartquantity})`;
    cartBtn.appendChild(newSpan);
    paintCart()
} else {
    let cartQuantity = document.getElementById('addedItem')
    cartQuantity.remove()
    cartNav.style.visibility = 'hidden';
}

function addXBtn(x, i) {
    newBtn = document.createElement('button')
    newBtn.setAttribute('class', 'btn');
    newBtn.innerHTML = `<i class="bi bi-x-lg" id="${i}" onclick="DeleteCart(this.id)"></i>`;
    x.appendChild(newBtn);
}

function paintCart() {
    let keys = Object.keys(sessionStorage);
    for(let key of keys) {
        let product1 = JSON.parse(sessionStorage.getItem(key));
        let newImgDiv = document.createElement('div');
        newImgDiv.setAttribute('class', "col-2");
        let newContentsDiv = document.createElement('div');
        newContentsDiv.setAttribute('class', "col-10 d-flex justify-content-between");
        cartContainer.appendChild(newImgDiv);
        cartContainer.appendChild(newContentsDiv);
        let newImg = document.createElement('img');
        let newAnchor = document.createElement('a');
        let newSmall1 = document.createElement('small');
        let newSmall2 = document.createElement('small');
        let newSmall3 = document.createElement('small');
        newImg.setAttribute('src', product1.imgsrc);
        newImg.setAttribute('class', "img-thumbnail");
        newImgDiv.appendChild(newImg);
        newAnchor.innerHTML = product1.title;
        newAnchor.setAttribute('href', product1.backToLiquid);
        newAnchor.setAttribute('class', "text-decoration-none col-5 text-black");
        newContentsDiv.appendChild(newAnchor);
        newSmall1.innerHTML = product1.liquid_quantity;
        newContentsDiv.appendChild(newSmall1);
        newSmall2.innerHTML = product1.coolings;
        newContentsDiv.appendChild(newSmall2);
        newSmall3.innerHTML = product1.total;
        newContentsDiv.appendChild(newSmall3);
        addXBtn(newContentsDiv, key);
    }
}

function DeleteCart(e) {
    if (Object.keys(sessionStorage) == null) {
        sessionStorage.removeItem(e);
    } else {
        sessionStorage.removeItem(e);
        cartQuantity.innerText = `(${sessionStorage.length})`
    }
    window.location.reload()
} 

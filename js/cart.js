const cartBtn = document.getElementById('cart-btn');
const empty = document.getElementById('empty');
const cartNav = document.getElementById('cart-nav');
const cartContainer = document.getElementById('cart-container');

if (sessionStorage.length != 0) {
    empty.remove();
    cartNav.style.visibility = 'visible';
    let newSpan = document.createElement('span');
    let cartquantity = sessionStorage.length;
    newSpan.setAttribute('id', 'addedItem')
    newSpan.innerHTML = `(${cartquantity})`;
    cartBtn.appendChild(newSpan);
    for (i = 1; i <= sessionStorage.length; i++) {
        let product1 = JSON.parse(sessionStorage.getItem(i));
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
        newAnchor.setAttribute('href', "/liquid/mtl/mtl-liquids/detox-aloe.html");
        newAnchor.setAttribute('class', "text-decoration-none text-black");
        newContentsDiv.appendChild(newAnchor);
        newSmall1.innerHTML = product1.liquid_quantity;
        newContentsDiv.appendChild(newSmall1);
        newSmall2.innerHTML = product1.coolings;
        newContentsDiv.appendChild(newSmall2);
        newSmall3.innerHTML = product1.total;
        newContentsDiv.appendChild(newSmall3);
        addXBtn(newContentsDiv)
    }
}

function addXBtn(x) {
    newBtn = document.createElement('button')
    newBtn.setAttribute('class', 'btn');
    newBtn.innerHTML = '<i class="bi bi-x-lg" onclick="DeleteCart()"></i>';
    x.appendChild(newBtn);
}

function DeleteCart() {
    sessionStorage.removeItem();
    cartNav.style.visibility = 'hidden';
    location.reload();
} 

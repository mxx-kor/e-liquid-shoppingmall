const minusBtn = document.getElementById('quantity-minus');
const plusBtn = document.getElementById('quantity-plus');
const quantity = document.getElementById('quantity-value');
const select = document.getElementById('selection');
const miniCart = document.getElementById('cart-mini');
const createdMiniCart = document.getElementById('cart-mini-element1');
const resultQuantity = document.getElementById('resultQuantity');
const resultCheck = document.getElementById('resultCheck');
const createdMiniCart2 = document.getElementById('cart-mini-element2');
const cartBtn = document.getElementById('cart-btn');
const buyBtn = document.getElementById('go-to-buy');

const LIQUID_NAME = 'title';
const LIQUID =  'liquid-quantity';
const COOLING = 'coolings';
const LIQUID_THUMBNAIL = 'img-thumbnail';
const TOTAL = 'total';


//수량 플러스, 마이너스 버튼
minusBtn.addEventListener('click', () => {
    if (quantity.value == 1) {
        alert("최소 주문 수량은 1개입니다.");
    }
    else {
        quantity.value --
    }
})

plusBtn.addEventListener('click', () => {
    if (quantity.value >= 10) {
        alert("개인 최대 구매수량은 10개입니다.");
        quantity.value = 10
    }
    else {
        quantity.value ++
    }
})

// 담기 버튼
miniCart.addEventListener('click', () => {
    let selectedItem = select.options[select.selectedIndex].text

    if (selectedItem == "선택하세요.") {
        alert("선택 먼저하세요")
    } else if (selectedItem == "쿨링에이전트5.5ml (3,900원)") {
        let howMany1 = quantity.value
        createdMiniCart2.innerHTML = `<small class="fw-bold">${selectedItem}</small>
        <small class="fw-bold" id="finalItem1">${howMany1}개 <i class="bi bi-x-lg" onclick="deleteItem2()" style="cursor: pointer;"></i></small>`;
        if (document.getElementById('finalItem2') == null) {
            resultQuantity.innerText = `(쿨링 ${howMany1}개)`;
            resultCheck.innerText = (howMany1 * 3900).toLocaleString('ko-KR')+'원';
        }else {
            resultQuantity.innerText = `${document.getElementById("finalItem2").innerText} (쿨링 ${howMany1}개)`;
            resultCheck.innerText = ((howMany1 * 3900) + (document.getElementById("finalItem2").innerText.slice(0, -2) * 15000)).toLocaleString('ko-KR')+'원';
        }
    }
    else {
        const howMany2 = quantity.value
        createdMiniCart.innerHTML = `<small class="fw-bold">${selectedItem}</small>
        <small class="fw-bold" id="finalItem2">${howMany2}개 <i class="bi bi-x-lg" onclick="deleteItem1()" style="cursor: pointer;"></i></small>`;
        if (document.getElementById('finalItem1') == null) {
            resultQuantity.innerText = `${howMany2}개`;
            resultCheck.innerText = (howMany2 * 15000).toLocaleString('ko-KR')+'원';
        } else {
            resultQuantity.innerText = `${howMany2}개 (쿨링 ${document.getElementById("finalItem1").innerText.slice(0, -1)})`;
            resultCheck.innerText = ((document.getElementById("finalItem1").innerText.slice(0, -2) * 3900) + (howMany2 * 15000)).toLocaleString('ko-KR')+'원';
        }
    }
    quantity.value = 1
})

// 미니카트 X 버튼 함수 (html onclick에 사용)
function deleteItem1(){
    createdMiniCart.innerHTML=''
    if (document.getElementById('finalItem1') == null) {
        resultQuantity.innerText = "0개";
        resultCheck.innerText = "0원";
    } else {
        resultQuantity.innerText = `(쿨링 ${document.getElementById("finalItem1").innerText.slice(0, -1)})`;
        resultCheck.innerText = (document.getElementById("finalItem1").innerText.slice(0, -2) * 3900).toLocaleString('ko-KR')+'원';
    }
}
function deleteItem2(){
    createdMiniCart2.innerHTML=''
    if (document.getElementById('finalItem2') == null) {
        resultQuantity.innerText = "0개";
        resultCheck.innerText = "0원";
    }else {
        resultQuantity.innerText = `${document.getElementById("finalItem2").innerText}`;
        resultCheck.innerText = (document.getElementById("finalItem2").innerText.slice(0, -2) * 15000).toLocaleString('ko-KR')+'원';
    }
}

// 장바구니에 담기 버튼

function addCart() {
    if (document.getElementById('liquid-title').innerText != '입호흡 DETOX Aloe Vera 디톡스 알로에베라 30ml 9.8mg') {
        alert('구현되지 않았습니다 😥')
    } else {
        if (document.getElementById('finalItem1') == null && document.getElementById('finalItem2') == null) {
            alert('상품을 선택하고 담기버튼을 눌러주세요.');
        } else if (document.getElementById('finalItem2') == null && document.getElementById('finalItem1') != null) {
            alert('추가상품만 주문은 불가합니다.');
        } else {
            let newSpan = document.createElement('span');
            let cartquantity = 1;
            if (document.getElementById('addedItem') == null) {
                let title = document.getElementById('liquid-title').innerText;
                let imgsrc = document.getElementById('liquid-thumbnail').src;
                let liquid_quantity = document.getElementById("finalItem2").innerText;
                let total = resultCheck.innerText;
                if (document.getElementById('finalItem1') == null) {
                    let coolings = '-'
                    const Product1 = new Product(title, imgsrc, liquid_quantity, coolings, total);
                    alert('장바구니에 담았습니다.');
                    newSpan.setAttribute('id', 'addedItem')
                    newSpan.innerHTML = `(${cartquantity})`;
                    cartBtn.appendChild(newSpan);
                    AddToSession(Product1)
                } else {
                    let coolings = document.getElementById("finalItem1").innerText;
                    const Product1 = new Product(title, imgsrc, liquid_quantity, coolings, total);
                    alert('장바구니에 담았습니다.');
                    newSpan.setAttribute('id', 'addedItem')
                    newSpan.innerHTML = `(${cartquantity})`;
                    cartBtn.appendChild(newSpan);
                    AddToSession(Product1)
                }
            } else {
                alert('이미 추가된 상품입니다.');
            }        
        }
    }
}

//구매하기 버튼
buyBtn.addEventListener('click', () => {
    if (resultCheck.innerText == '0원') {
        alert('상품을 먼저 선택해주세요')
    } else if (document.getElementById('finalItem2') == null && document.getElementById('finalItem1') != null) {
        alert('추가상품만 주문은 불가합니다.');
    } else {
        location.href = '/buy.html'
    }
})

// product 객체 생성용
function Product(title, imgsrc, liquid_quantity, coolings, total) {
    this.title = title;
    this.imgsrc = imgsrc;
    this.liquid_quantity = liquid_quantity;
    this.coolings = coolings;
    this.total = total;
  }
// 세션스토리지에 저장 (cooling이 null일때 문제점있음)
function AddToSession(product) {
    sessionStorage.setItem(LIQUID_NAME, product.title);
    sessionStorage.setItem(LIQUID_THUMBNAIL, product.imgsrc);
    sessionStorage.setItem(LIQUID, product.liquid_quantity);
    sessionStorage.setItem(COOLING, product.coolings);
    sessionStorage.setItem(TOTAL, product.total);
}
  

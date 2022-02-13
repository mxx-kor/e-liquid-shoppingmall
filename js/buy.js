let amount = document.getElementById('quantity');
let itemTitle = document.getElementById('item-title');
let itemTotal = document.getElementById('item-total');
let coolingTitle = document.getElementById('cooling-quantity');
let coolingTotal = document.getElementById('cooling-total');
let total = document.getElementById("total");
let shipping = 2500
let promoDiscound = 1000

let buyItem = JSON.parse(sessionStorage.getItem('buyItem'));

amount.innerText = buyItem.liquid_quantity;
itemTitle.innerText = buyItem.title;
itemTotal.innerText = buyItem.total;
if (buyItem.coolings != "-") {
    itemTotal.innerText = (Number(buyItem.total.replace(",", "").slice(0, -1)) - (Number(buyItem.coolings.slice(0, -2) * 3900))).toLocaleString('ko-KR') + "원";
    coolingTitle.innerText = "쿨링 에이전트 5.5ml (+ 3,900원)";
    coolingTotal.innerText = ((buyItem.coolings.slice(0, -2) * 3900)).toLocaleString('ko-KR')+'원';
    total.innerText = ((Number(buyItem.total.replace(",", "").slice(0, -1))) + shipping - promoDiscound).toLocaleString('ko-KR')+'원';
} else {
    itemTotal.innerText = buyItem.total;
    total.innerText = ((Number(buyItem.total.replace(",", "").slice(0, -1))) + shipping - promoDiscound).toLocaleString('ko-KR')+'원';
}

sessionStorage.removeItem('buyItem');


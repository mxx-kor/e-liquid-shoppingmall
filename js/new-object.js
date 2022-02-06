function addCart() {
    function Liquid (title, imgsrc, liquid_quantity, coolings, total) {
        this.title = title;
        this.imgsrc = imgsrc;
        this.total = total;
        this.liquid_quantity = liquid_quantity;
        this.coolings = coolings;
     }
     let cartNum = sessionStorage.length
     if (sessionStorage.getItem(1) == null) {
        let title = document.getElementById('liquid-title').innerText;
        let imgsrc = document.getElementById('liquid-thumbnail').src;
        let total = document.getElementById('resultCheck').innerText;
        let liquid_quantity = document.getElementById("finalItem2").innerText.slice(0, -1);
        if (document.getElementById('finalItem1') == null) {
            let coolings = "-";
            let liquid1 = new Liquid(title, imgsrc, liquid_quantity, coolings, total);
            sessionStorage.setItem(cartNum, JSON.stringify(liquid1));
        }else {
            let coolings = document.getElementById("finalItem1").innerText;
            let liquid1 = new Liquid(title, imgsrc, liquid_quantity, coolings, total);
            sessionStorage.setItem(object, liquid1)
        }
     } else {
        let cartNum = sessionStorage.length
        cartNum += 1
        let title = document.getElementById('liquid-title').innerText;
        let imgsrc = document.getElementById('liquid-thumbnail').src;
        let total = document.getElementById('resultCheck').innerText;
        let liquid_quantity = document.getElementById("finalItem2").innerText.slice(0, -1);
        if (document.getElementById('finalItem1') == null) {
            let coolings = "-";
            let liquid1 = new Liquid(title, imgsrc, liquid_quantity, coolings, total);
            sessionStorage.setItem(cartNum, JSON.stringify(liquid1));
        }else {
            let coolings = document.getElementById("finalItem1").innerText;
            let liquid1 = new Liquid(title, imgsrc, liquid_quantity, coolings, total);
            sessionStorage.setItem(object, liquid1)
        }
     }
}

let product1 = JSON.parse(sessionStorage.getItem(1));

for (i = 1; i < sessionStorage.length; i++) {
    console.log(product1.title)
}




let json =
  '{"itens" :[{"name": "Jordan","title": "Title","src": "./imgs/jordan-1.png","description": "description","price_in_cents": 100000},{"name": "Jordan","title": "Title1","src": "./imgs/jordan-2.png","description": "description2","price_in_cents": 120000}]}';
const itens = JSON.parse(json);

for (let i = 0; i < itens.itens.length; i++) {
    let item_card = window.document.createElement("div");
    document.querySelector(".container").appendChild(item_card);
    item_card.classList.add("product-card")

    let product_img = window.document.createElement("img");
    item_card.appendChild(product_img);
    product_img.src = itens.itens[i].src;

    let product_title = window.document.createElement("h4");
    item_card.appendChild(product_title);
    product_title.innerHTML = itens.itens[i].title;

    let product_description = window.document.createElement("p");
    item_card.appendChild(product_description);
    product_description.innerHTML = itens.itens[i].description;

    let product_price = window.document.createElement("span");
    item_card.appendChild(product_price);
    var value =  (itens.itens[i].price_in_cents / 100);
    product_price.innerHTML = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
}   



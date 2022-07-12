const frm = document.querySelector("form");

const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3"); 

frm.addEventListener("submit", (e) => {

    const medc = (frm.nomeMedc.value);
    const preco = Number(frm.precoMedc.value);

    promo = Math.floor(preco*2);

    resp1.innerText = `Promoção de ${medc}`;
    resp2.innerHTML = `Leve 2 por apenas R$: ${promo.toFixed(2)}`;

    e.preventDefault();

});

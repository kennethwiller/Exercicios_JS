const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    const nome = frm.nomeP.value;
    const precoPro =  Number(frm.precoP.value);

    const valorP = (precoPro * 2);
    const desconto = (precoPro * 0.50);
    const descontoFinal = (valorP + desconto);
    
    resp1.innerText = `${nome}: Leve 3 por R$: ${descontoFinal.toFixed(2)} reais`;
    resp2.innerText = `O 3 produto custará apenas R$: ${desconto.toFixed(2)} reais`;

    e.preventDefault();

});
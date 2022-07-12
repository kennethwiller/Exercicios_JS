const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    const quilo = Number(frm.precoKg.value);
    const consumo = Number(frm.precoGr.value);

    const valor = (quilo / 1000) * consumo;
    resp.innerHTML = `Valor a pagar R$ ${valor.toFixed(2)}`

    e.preventDefault(); //evita o envio do form
});
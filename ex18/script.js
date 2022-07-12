const frm = window.document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const numero = frm.numero.value;
    let resposta = `Entre ${numero} e 1: `;

    for (let i = numero; i > 1; i--) {
        resposta = resposta + i + ", ";
    };

    resp.innerText = resposta + "1.";
});
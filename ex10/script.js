const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const nome = frm.nome.value;
    const masculino = frm.sexMasc.checked;
    const altura = Number(frm.altura.value);

    let peso;

    if (masculino) {
        peso = 22 * Math.pow(altura, 2);

    } else {
        peso = 21 * Math.pow(altura, 2);
    }

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`;
});

frm.addEventListener("reset", () => {

    resp.innerText = `` //limpa o conteúdo do h3 que exibe a resposta
});

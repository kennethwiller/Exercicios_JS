const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const numero = Number(frm.num.value);
    const raiz = Math.sqrt(numero); //calcula a raiz quadrada de um número

    if (Number.isInteger(raiz)) { // se valor da rai for um número inteiro
        resp.innerText = `Raiz quadrada de ${numero} é: ${raiz}`
    } else {
        resp.innerText = `Não existe raiz exata para ${numero}`
    }
})
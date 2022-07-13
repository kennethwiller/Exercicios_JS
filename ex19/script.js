const frm = document.querySelector("form");
const resp1 = document.getElementById("resp01");
const resp2 = document.getElementById("resp02");

let resposta = "";
let numContas = 0;
let valorTotal = 0;

frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const descricao = frm.descricao.value;
    const valor = Number(frm.valor.value);
    
    valorTotal = valorTotal + valor;
    numContas++;
    
    resposta = `${resposta} ${descricao} - R\$: ${valor} \n`;

    resp1.innerText = `${resposta} --------------------------`;
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valorTotal}`;

    frm.descricao.value = "";
    frm.valor.value = "";
    frm.descricao.focus(); //posiciona no campo descricao do form
});

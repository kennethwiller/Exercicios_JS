const frm = document.querySelector("form");
const respVeic = document.querySelector("#resp1");
const respPreco = document.querySelector("#resp2");
const respParce = document.querySelector("#resp3")

//cria um "ouvinte"/evento, acionado qunado o botão submit for clicado
frm.addEventListener("submit", (e) => {

    const veiculo = frm.veiculo.value;
    const preco = Number(frm.preco.value);

    const entrada = preco * 0.50; //calcula o valor da entrada
    const parcela = (preco * 0.50) / 12; //calcula o valor das parcelas

    resp1.innerText = `Promoção ${veiculo}`;
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`;
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`;

    e.preventDefault()
})
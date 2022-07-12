frm = document.querySelector("form");
const resp1 = document.getElementById("resp1");
const resp2 = document.getElementById("resp2");
const resp3 = document.getElementById("resp3");

frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const saque = Number(frm.valor.value);

    if (saque % 10 != 0) {
        alert("Valor inválido para as notas disponíveis (R$ 10, 20, 50, 100)");
        frm.saque.focus();
        return;
    }

    const notasCem = Math.floor(saque / 100)
    let resto = saque % 100;

    const notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50;

    const notasDez = Math.floor(resto / 10);
    
    if (notasCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notasCem}`;
    }
    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`;
    }
    if (notasDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notasDez}`;    
    }
})

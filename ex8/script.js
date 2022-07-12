const frm = window.document.querySelector("form");
const respMedia = window.document.querySelector("h2");
const respAprov = window.document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    const nome = frm.nomeA.value;
    const nota1 = Number(frm.nota1.value);
    const nota2 = Number(frm.nota2.value);

    let media = (nota1 + nota2) / 2;

    respMedia.innerText = `Média das notas = ${media}`; 

    e.preventDefault();

    if (media >= 7) {
        respAprov.innerText = `Parabéns ${nome} você foi aprovado!`;
        respAprov.style.color = "blue";
    } else if (media >= 4) {
        respAprov.innerText = `Atenção ${nome} você está em recuperação!`;
        respAprov.style.color = "green"; 
    } else {
        respAprov.innerText = `Atenção ${nome} você foi reprovado!`;
        respAprov.style.color = "red";
    }
})
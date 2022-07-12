const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const veloPermt = Number(frm.veloPer.value);
    const veloCondut = Number(frm.veloCond.value);

    let multaLeve = veloCondut * 0.20;

    if (veloCondut <= veloPermt) {
        resp.innerText = `Situação: Sem Multa`
    
    } else if (multaLeve > veloPermt) {
        resp.innerText = `Situação: Multa Leve`
    
    } else if (veloCondut > multaLeve) {
        resp.innerText = `Situação: Multa Grave`
    }

})
frm = document.querySelector("form");
resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    e.preventDefault();

    valor = Number(frm.valorS.value);

    if (valor % 2 == 0) {
        resp.innerText = `${valor} é Par`
    } else {
        resp.innerText = `${valor} é Impar`
    }
})
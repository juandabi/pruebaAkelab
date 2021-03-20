function fibonacci(limite) {
    let listaFibo = document.getElementById("listaFibonacci");
    listaFibo.innerHTML = "";
    let serieFibo = [0, 1];

    for (i = 2; i <= limite; i++) {
        serieFibo.push(serieFibo[i - 1] + serieFibo[i - 2]);
    }
    serieFibo.splice(0, 1);
    serieFibo.forEach((numero) => {
        let item = document.createElement("li");
        let textoItem = document.createTextNode(numero);
        item.appendChild(textoItem);
        listaFibo.appendChild(item);
    });
}

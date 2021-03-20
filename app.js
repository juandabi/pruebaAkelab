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

function AKELAB(limite) {
    let lista = document.getElementById("listaFibonacci");
    lista.innerHTML = "";
    let serie = [];
    for (i = 1; i <= limite; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            serie.push("AKELAB");
        } else if (i % 3 == 0) {
            serie.push("AKE");
        } else if (i % 5 == 0) {
            serie.push("LAB");
        } else {
            serie.push(i);
        }
    }
    serie.forEach((numero) => {
        let item = document.createElement("li");
        let textoItem = document.createTextNode(numero);
        item.appendChild(textoItem);
        lista.appendChild(item);
    });
}

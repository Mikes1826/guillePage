export const suma = () => {
    const num1 = parseInt(document.querySelector(".num").value);
    const num2 = parseInt(document.querySelector(".num2").value);

    const answer = document.querySelector("#answer");

    answer.innerText = "La suma es: " + (num1 + num2);
};

export const resta = () => {
    const num1 = parseInt(document.querySelector(".num").value);
    const num2 = parseInt(document.querySelector(".num2").value);

    const answer = document.querySelector("#answer");

    answer.innerText = "La resta es: " + (num1 - num2);
};

export const multi = () => {
    const num1 = parseInt(document.querySelector(".num").value);
    const num2 = parseInt(document.querySelector(".num2").value);

    const answer = document.querySelector("#answer");

    answer.innerText = "La Multiplicación es: " + (num1 * num2);
};

export const divi = () => {
    const num1 = parseInt(document.querySelector(".num").value);
    const num2 = parseInt(document.querySelector(".num2").value);

    const answer = document.querySelector("#answer");

    answer.innerText = "La división es: " + (num1 / num2);
};

export const promedio = () => {
    const nota1 = parseInt(document.querySelector(".nota").value);
    const nota2 = parseInt(document.querySelector(".nota2").value);
    const nota3 = parseInt(document.querySelector(".nota3").value);
    const nota4 = parseInt(document.querySelector(".nota4").value);
    const answer = document.querySelector(".answerProm");

    const prom = (nota1 + nota2 + nota3 + nota4) / 4;

    answer.innerText = "El promedio actual es: " + prom;
};

export const factura = () => {
    const name = document.querySelector(".name").value;
    const id = document.querySelector(".id").value;
    const product = document.querySelector(".product").value;
    const cant = parseFloat(document.querySelector(".cant").value);
    const value = parseFloat(document.querySelector(".value").value);
    const factu = document.querySelector(".answerFact");

    const neto = cant * value;
    const iva = neto * 0.19;
    const total = neto + iva;

    factu.innerText = "Nombre: " + name + "\nDocumento: " + id + "\nProducto: " + product + "\nCantidad: " + cant + "\nneto: " + neto + "\nIVA: " + iva + "\nTotal: " + total;



};


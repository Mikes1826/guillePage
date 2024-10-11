export const verificar = () => {
    const num = parseInt(document.querySelector(".num").value);
    const answer = document.querySelector("#answer");

    if (num > 0){
        answer.innerText = "El número " + num + " Es positivo";
    }else {
        answer.innerText = "El número " + num + " No es positivo";
    }

};

export const comparar = () => {
    const num1 = parseInt(document.querySelector(".num1").value);
    const num2 = parseInt(document.querySelector(".num2").value);
    const num3 = parseInt(document.querySelector(".num3").value);
    const answer = document.querySelector(".answerMay");

    if (num1 > num2 && num1 > num3){
        answer.innerText = num1 + " Es mayor que " + num2 + " y " + num3;
    }else if(num2 > num1 && num2 > num3){
        answer.innerText = num2 + " Es mayor que " + num1 + " y " + num3;
    }else{
        answer.innerText = num3 + " Es mayor que " + num1 + " y " + num2;
    }

};

export const facturar = () => {
    const nom = document.querySelector(".name").value;
    const product = document.querySelector(".product").value;
    const id = document.querySelector(".id").value;
    const cant = document.querySelector(".cant").value;
    const val = document.querySelector(".value").value;
    const answer = document.querySelector(".answerFact");
    let iva = (cant * val) * 0.19;
    let total =  (cant * val) + iva;
    let neto = cant * val;
    answer.innerText = "--------------------\n" + "Nombre: " + nom + "\n Cedula: " + id + "\n Producto: " + product + "\n Cantidad: " + cant + "\n Valor unitario: " + val  + "\n IVA: " + iva +"\n Neto: " + neto + "\n Total: " + total +"\n--------------------"; 


};
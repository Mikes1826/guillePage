export const mostrarAlgo = () => {
    const  text = document.querySelector(".input").value;
    const Answer = document.querySelector(".answer");

    Answer.innerText = text;
}

export const mostrarNumeros = () => {
    const num1 = document.querySelector(".num").value;
    const num2 = document.querySelector(".num2").value;

    const answernum = document.querySelector(".answernum");
    const answernum2 = document.querySelector(".answernum2");

    answernum.innerText = "Esto es un numero entero: " + num1;
    answernum2.innerText = "Esto es un numero real: " + num2;
}

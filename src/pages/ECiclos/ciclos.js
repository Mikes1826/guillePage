let countErrors = 0;

export const tareaCiclos = () => {


    const users = ["pepito", "juanito", "pepita"];
    const pass = ["12345", "67890", "88888"];
    const answer = document.querySelector(".answerFact");
    const btn =  document.querySelector(".btn");
    
    let inputUser = document.querySelector(".user").value;
    let inputPass = document.querySelector(".password").value;    
    
    let userAuthenticated = false;
    
    if(countErrors < 3) {
        
        for (let i = 0; i < users.length; i++){
                if (inputUser === users[i] && inputPass === pass[i]){   
                    answer.textContent = "Welcome";
                    userAuthenticated = true;
                    break;
                }
        }
        if (!userAuthenticated){
            countErrors = countErrors + 1;
            answer.textContent = `Vos quien poronga sos >:V ,Intentos fallidos: ${countErrors}`; 
        }
    } else {
        answer.textContent = `Paila Papa ya no te deraje usar más el boton (ctrl + r para recargar la pagina ;D)`;
        btn.classList.add("hidden");
    }
};

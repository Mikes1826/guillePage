import { useContext } from "react";
import { MikeContext } from "../Context";



const Card = (info) => {

    const pokeName = info.data.name;
    // ESTA FUNCION TE REDIRECCIONA A UN REGALO DEE DITTO   
    const gift = () => {
        if (pokeName === "ditto"){
            setTimeout(()=>{
                window.location = "https://matias.me/nsfw/"
            }, 2000);
        }
}

    const context = useContext(MikeContext);

    return (
        <div className="mb-4 flex flex-col justify-center items-center bg-orange-300 cursor-pointer w-56 h-60 rounded-xl hover:bg-blue-300">
            <figure onClick= {gift} className="relative mb-4 w-4/5 h-3/5 flex justify-center items-center flex-col bg-white rounded-lg">
                <img className="w-full" src={info.data.sprites.front_default} alt={info.data.name} />
            </figure>
            <span className="font-medium font-">{pokeName}</span>
        </div>
        )  ; 
    }; 
export { Card };
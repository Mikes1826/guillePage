
import { useState } from "react";
import { Layout } from "../../components/Layout";
import { Screen } from "../../components/Screen"
import { mostrarAlgo, mostrarNumeros } from "./exercices";


const EConceptos = () =>{
    const [visibility, setVisibility] = useState({
        hid1: "hidden",
        hid2: "hidden",
    });

    const toggleVisibility = (section) => {
        setVisibility(prevState =>({
            ...prevState, [section]: prevState[section] === "hidden" ? "" : "hidden",
        }))
    }

    return(
        <Layout>
            He aqui la razon principal por la que hice esta pagina (SOLO debia de usar JS,HTML y css, pero que chimba es liarmela yo mismo)

        <Screen>
            <div className="mb-9 w-full h-5 p-3 flex">
                <p>
                    <span onClick={() => toggleVisibility("hid1")} className="ej-1   w-[70px] p-1 m-2 hover:bg-blue-500 rounded-lg font-medium cursor-pointer">Ejercicio 1</span>
                    <span onClick={() => toggleVisibility("hid2")} className="ej-2 w-[70px] p-1 m-2 hover:bg-blue-500 rounded-lg font-medium cursor-pointer">Ejercicio 2</span>
                </p>
            </div>
            <section className={`${visibility.hid1} w-4/5 h-4/5`}>
                <div className={ `flex flex-col w-full h-4/5 bg-white rounded-lg justify-center items-center mb-4`}>
                    <h1 className="answer font-medium text-3xl mb-9">
                    </h1>
                    <p className="text-end">mira Guille sin ChatGPT :D...  bueno solo para conectar la API</p>
                </div>
                <div className="flex justify-between w-full">
                    <input className="input w-4/5 rounded-md focus:ring-1 focus:ring-orange-400" type="text" placeholder="Escribe algo Aquí" />
                    <button className="btn-print w-[145px] ml-3 h-full bg-orange-400 rounded-lg hover:bg-orange-500 hover:ring-2 hover:ring-blue-600 font-semibold text-sm p-2" onClick={mostrarAlgo}>Esto debería hacer algo</button>
                </div>
            </section>
            <section className={`${visibility.hid2} w-4/5 h-4/5`}>
                <div className="flex flex-col w-full h-4/5 bg-white rounded-lg justify-center items-center mb-4">
                    <div className="w-full h-4/5 flex flex-col justify-center items-center">
                        <h1 className="answernum font-medium text-3xl mb-9"></h1>
                        <h1 className="answernum2 font-medium text-3xl mb-9"></h1>
                    </div>
                    <p className="text-end">mira Guille sin ChatGPT :D...  bueno solo para algunas cositas pero con REACT</p>
                </div>
                <div className="flex justify-between w-full gap-3">
                    <input className="num w-3/5 rounded-md focus:ring-1 focus:ring-orange-400" type="number" placeholder="un número" />
                    <input className="num2 w-3/5 rounded-md focus:ring-1 focus:ring-orange-400" type="number" placeholder="un número Real"/>
                    <button  className="btn-print w-[145px] h-full bg-orange-400 rounded-lg hover:bg-orange-500 hover:ring-2 hover:ring-blue-600 font-semibold text-sm p-2" onClick={mostrarNumeros}>Esto debería hacer algo</button>
                </div>
            </section>

        </Screen>
        </Layout>
    )
};

export { EConceptos };
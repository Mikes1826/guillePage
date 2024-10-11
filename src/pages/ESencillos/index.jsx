
import { useState } from "react";
import { Layout } from "../../components/Layout";
import { Screen } from "../../components/Screen"
import { suma, resta, multi, divi, promedio, factura} from "./simple."


const ESencillos = () =>{
    const [visibility, setVisibility] = useState({
        hid1: "hidden",
        hid2: "hidden",
        hid3: "hidden",
    });

    const gift = () => {setTimeout(()=>{
                window.location = "https://www.youtube.com/watch?v=Bv-aHV0pT8I"
            }, 2000);
    }

    const toggleVisibility = (section) => {
        setVisibility(prevState =>({
            ...prevState, [section]: prevState[section] === "hidden" ? "" : "hidden",
        }))
    }

    return(
        <Layout>
        Ya le vamos cogiendo el tiro, solo es cuestion de practicar :,D 

        <Screen>
            <div className="mb-9 w-full h-5 p-3 flex">
                <p>
                    <span onClick={() => toggleVisibility("hid1")} className="ej-1 w-[70px] p-1 m-2 hover:bg-blue-500 rounded-lg font-medium cursor-pointer">Matematicos</span>
                    <span onClick={() => toggleVisibility("hid2")} className="ej-2 w-[70px] p-1 m-2 hover:bg-blue-500 rounded-lg font-medium cursor-pointer">Promedio</span>
                    <span onClick={() => toggleVisibility("hid3")} className="ej-2 w-[70px] p-1 m-2 hover:bg-blue-500 rounded-lg font-medium cursor-pointer">Factura</span>
                </p>
            </div>
            <section className={`${visibility.hid1} w-4/5 h-4/5`}>
                <div className={ `flex flex-col w-full h-3/5 bg-white rounded-lg justify-center items-center mb-4`}>
                <div className="flex justify-center items-center w-full h-4/5">
                    <h1  id="answer" className="font-medium text-3xl mb-9"></h1>
                </div>
                    <p className="text-end">mira Guille sin ChatGPT, esta vez realmente no lo utilice :DDD</p>
                </div>
                <div className="flex justify-between w-full gap-3">
                    <input className="num w-3/5 rounded-md focus:ring-1 focus:ring-orange-400" type="number" placeholder="un número" />
                    <input className="num2 w-3/5 rounded-md focus:ring-1 focus:ring-orange-400" type="number" placeholder="otro numero"/>
                </div>
                <div className="flex mt-6 gap-6">
                <button  className="btn-print w-[145px] h-full bg-orange-400 rounded-lg hover:bg-orange-500 hover:ring-2 hover:ring-blue-600 font-semibold text-sm p-2" onClick={suma}>Sumar</button>
                <button  className="btn-print w-[145px] h-full bg-orange-400 rounded-lg hover:bg-orange-500 hover:ring-2 hover:ring-blue-600 font-semibold text-sm p-2" onClick={resta}>Restar</button>
                <button  className="btn-print w-[145px] h-full bg-orange-400 rounded-lg hover:bg-orange-500 hover:ring-2 hover:ring-blue-600 font-semibold text-sm p-2" onClick={multi}>Multiplicar</button>
                <button  className="btn-print w-[145px] h-full bg-orange-400 rounded-lg hover:bg-orange-500 hover:ring-2 hover:ring-blue-600 font-semibold text-sm p-2" onClick={divi}>Dividir</button>
                </div>
            </section>
            <section className={`${visibility.hid2} w-4/5 h-4/5`}>
                <div className="flex flex-col w-full h-4/5 bg-white rounded-lg justify-center items-center mb-4">
                    <div className="w-full h-4/5 flex flex-col justify-center items-center">
                        <h1 className="answerProm font-medium text-3xl mb-9"></h1>
                    </div>
                    <p className="text-end">mira Guille sin ChatGPT :D...  bueno solo para algunas cositas pero con REACT</p>
                </div>
                <div className="flex flex-col justify-center items-center w-full">

                    <div className="flex gap-3">
                    <input className="nota w-3/5 rounded-md focus:ring-1 focus:ring-orange-400" type="number" placeholder="nota 1" />
                    <input className="nota2 w-3/5 rounded-md focus:ring-1 focus:ring-orange-400" type="number" placeholder="nota 2"/>
                    <input className="nota3 w-3/5 rounded-md focus:ring-1 focus:ring-orange-400" type="number" placeholder="nota 3" />
                    <input className="nota4 w-3/5 rounded-md focus:ring-1 focus:ring-orange-400" type="number" placeholder="nota 4"/>
                    </div>
                    <button  className="btn-print mt-3 w-3/5 h-full bg-orange-400 rounded-lg hover:bg-orange-500 hover:ring-2 hover:ring-blue-600 font-semibold text-sm p-2" onClick={promedio}>Promedio</button>
                </div>
            </section>
            <section className={`${visibility.hid3} w-4/5 h-4/5 flex flex-row-reverse`}>
                <div className="flex flex-col w-full h-full bg-white rounded-lg justify-center items-center mb-4">
                    <div className="w-[90%] h-full flex flex-col justify-center items-center">
                        <h1 className="answerFact font-sm text-xl mb-9"></h1>
                    </div>
                    <p className="text-center">Les recomiendo esta canción <span onClick={gift} className="font-semibold text-orange-400 cursor-pointer">CLICK</span></p>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-2">
                    <input className="name w-4/5 rounded-md focus:ring-1 focus:ring-orange-400" type="text" placeholder="Nombre" />
                    <input className="id w-4/5 rounded-md focus:ring-1 focus:ring-orange-400" type="number" placeholder="ID (Cedula para los panas)"/>
                    <input className="product w-4/5 rounded-md focus:ring-1 focus:ring-orange-400" type="text" placeholder="Producto" />
                    <input className="cant w-4/5 rounded-md focus:ring-1 focus:ring-orange-400" type="number" placeholder="Cantidad"/>
                    <input className="value w-4/5 rounded-md focus:ring-1 focus:ring-orange-400" type="number" placeholder="Valor del producto"/>
                    <button  className="btn-print mt-3 w-3/5 h-[50px] bg-orange-400 rounded-lg hover:bg-orange-500 hover:ring-2 hover:ring-blue-600 font-semibold text-sm p-2" onClick={factura}>Facturar</button>
                </div>
            </section>  
            

        </Screen>
        </Layout>
    )
};

export { ESencillos };
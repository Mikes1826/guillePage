    import { useState } from "react";
    import { Layout } from "../../components/Layout";
    import { Screen } from "../../components/Screen";
    import { tareaCiclos } from "./ciclos";

    const ECiclos = () =>{

        const [visibility, setVisibility] = useState({
            hid1: "hidden",
            hid2: "hidden",
            hid3: "hidden",
        });

        const gift = () => {setTimeout(()=>{
                    window.location = "https://www.youtube.com/watch?v=Be23zrpABLg"
                }, 2000);
        }

        const toggleVisibility = (section) => {
            setVisibility(prevState =>({
                ...prevState, [section]: prevState[section] === "hidden" ? "" : "hidden",
            }))
        }
        return(
            <Layout>
                quiero declararle mi amor a ella, pero solo puedo declarar variables :,D

            <Screen>
                <div className="mb-9 w-full h-5 p-3 flex">
                    <p>
                        <span onClick={() => toggleVisibility("hid1")} className="ej-1 w-[70px] p-1 m-2 hover:bg-blue-500 rounded-lg font-medium cursor-pointer">Ciclos con JAVASCRIPT</span>
                    </p>
                </div>
                <section className={`${visibility.hid1} w-4/5 h-4/5 flex flex-row-reverse`}>
                    <div className="flex flex-col w-full h-full bg-white rounded-lg justify-center items-center mb-4">
                        <div className="w-[90%] h-full flex flex-col justify-center items-center">
                            <h1 className="answerFact font-sm text-xl mb-9"></h1>
                        </div>
                        <p className="text-center">ARES NO DISPARESSSS <span onClick={gift} className="font-semibold text-orange-400 cursor-pointer">CLICK</span></p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full gap-2">
                        <p className="font-medium">User</p>
                        <input className="user w-4/5 rounded-md focus:ring-1 focus:ring-orange-400" type="text" placeholder="Username (usuario)" />
                        <p className="font-medium">Password</p>
                        <input className="password w-4/5 rounded-md focus:ring-1 focus:ring-orange-400" type="text" placeholder="Password (Contraseña)"/>
                        
                        <button  className="btn mt-3 w-3/5 h-[50px] bg-orange-400 rounded-lg hover:bg-orange-500 hover:ring-2 hover:ring-blue-600 font-semibold text-sm p-2" onClick={() => tareaCiclos()}>Sign in (ingresar)</button>
                    </div>
                </section>  
                

            </Screen>
            </Layout>
        )
};

export { ECiclos };
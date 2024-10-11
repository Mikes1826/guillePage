import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { Home } from "../Home"
import { EConceptos } from "../EConceptos/"
import { ESencillos } from "../ESencillos"
import { ECondicionales } from "../ECondicionales"
import { ECiclos } from "../ECiclos"
import { EArreglos } from "../EArreglos"
import { EFuncion } from "../EFuncion"
import { NotFound } from "../NotFound"
import "./App.css";
import { MikeProvider } from "../../components/Context";

const AppRoutes = () => {
  let routes = useRoutes([
    {path: "/", element: <Home/>},
    {path: "/conceptos", element: <EConceptos/>},
    {path: "/sencillos", element: <ESencillos/>},
    {path: "/condicionales", element: <ECondicionales/>},
    {path: "/ciclos", element: <ECiclos/>},
    {path: "/arreglos", element: <EArreglos/>},
    {path: "/funciones", element: <EFuncion/>},
    {path: "/*", element: <NotFound/>},

  ])
  return routes;
};


const App = () => {

  return (
    <>
    <MikeProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar />
      </BrowserRouter>
    </MikeProvider>
    </>
  )
}

export default App

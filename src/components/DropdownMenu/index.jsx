import { NavLink } from "react-router-dom";
import React from "react";
import "./style.css"

const DropdownMenu = () => {

    const NavItem = ({to ,children}) => {
        return (
            <NavLink
            className="NavItem text-blue-500" 
            to= { to }
            >
                {children}
            </NavLink>
        );
    };
    return (
        <div  className= "flex flex-col right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-orange-200 shadow-lg ring-1 ring-black ring-opacity-5 dropdown-menu">
        <ul className="py-1 flex flex-col" >
            <li className="block px-4 py-2 text-sm hover:bg-orange-400 rounded-lg cursor-pointer">
                <NavItem  to= "/conceptos">
                    Ejercicios de conceptos
                </NavItem> 
            </li>
            <li className="block px-4 py-2 text-sm hover:bg-orange-400 rounded-lg cursor-pointer">
                <NavItem  to= "/sencillos">
                    Ejercicios sencillos
                </NavItem>
            </li>
            <li className="block px-4 py-2 text-sm hover:bg-orange-400 rounded-lg cursor-pointer">
                <NavItem  to= "/condicionales">
                    Ejercicios condicionales
                </NavItem>
            </li>
            <li className="block px-4 py-2 text-sm hover:bg-orange-400 rounded-lg cursor-pointer">
                <NavItem  to= "/ciclos">
                    Ejercicios ciclos
                </NavItem>
            </li>
            <li className="block px-4 py-2 text-sm hover:bg-orange-400 rounded-lg cursor-pointer">
                <NavItem  to= "/funciones">
                    Ejercicios funciones
                </NavItem>
            </li>
            <li className="block px-4 py-2 text-sm hover:bg-orange-400 rounded-lg cursor-pointer">
                <NavItem  to= "/">
                    Inicio
                </NavItem>
            </li>
        </ul>
    </div>
    );
};

export { DropdownMenu };
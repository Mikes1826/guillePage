import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { DropdownMenu } from "../DropdownMenu";
import { useState } from "react";

const NavBar = () =>{

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="flex justify-around items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-medium">
            <div className="p-3 bg-orange-500 rounded-lg ring-2 ring-blue-300">
                <h1 className="text-blue-300 text-xl">Mike´s Page for Guille</h1>
            </div>
            <div className="bg-white p-3 ring-2 rounded-lg ring-orange-500">
                <h2 className="text-orange-500">
                    Que cheemba es programar (Ya llore como 7 veces haciendo este navbar)
                    </h2>
            </div>
            <div className="w-[120px] h-full relative inline-block text-left">
                <button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-orange-600" onClick={() =>setOpenMenu((itsOpen)=>!itsOpen)}>
                    Menu
                    <ChevronDownIcon className="w-5 h-5 -mr-1 " />
                </button>
                {
                    openMenu && <DropdownMenu/>
                }
            </div>
        </nav>
    );
};

export { NavBar };
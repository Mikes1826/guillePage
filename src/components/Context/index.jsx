import React from "react";
import { useState, createContext } from "react";

export const MikeContext = createContext();
export const MikeProvider = ({children}) => {


    

    return(
        <MikeContext.Provider value = {{

        }}>
            {children}
        </MikeContext.Provider>

    );
};
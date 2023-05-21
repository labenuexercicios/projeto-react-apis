import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./constants";
import GlobalContext from "../context/globalContext";


export default function GlobalState({children}){

    
    const values = {pokemons}
    return(
        <GlobalContext.Provider value={values}>
            {children}            
        </GlobalContext.Provider>
    )
}
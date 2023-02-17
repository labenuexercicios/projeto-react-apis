import React from "react";
import logo from "../../assets/pokedexlogo.png"
 import { ContainerHeader } from "./style";

export const Header= ()=>{


     return(

        <ContainerHeader>
            <img src={logo}/>


        </ContainerHeader>



    )
}
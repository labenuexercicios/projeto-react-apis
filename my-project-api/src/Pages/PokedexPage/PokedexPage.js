import React from "react";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";


export  function PokedexPage() {

    



    return ( 
        <div>   
            <header>
                {/* <h1>Meus Pokémons</h1> */}
                <Header />
                <PokemonCard />
            </header>
        </div>

    )
};
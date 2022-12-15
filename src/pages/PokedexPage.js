import React from "react";
import PokemonCard from "../components/card/PokemonCard";
import Header from "../components/Header";
import styled from 'styled-components';
import { BASE_URL } from "../constants/url";

import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const PokedexPageStyled = styled.div`

padding:24px;
background-color:#5D5D5D;
min-height:100vh;
display: flex;
flex-direction:column;


h1{
    color: white;
    font-weight:700;
    font-size: 48px;
    margin-bottom:56px;     
   
}
.divCard{
    display: flex;
    flex-wrap:wrap;
    gap:20px;
  
    
}

`

const PokedexPage = () => {
    const context = useContext(GlobalContext)
   
   const {pokedex, removePokedex} = context


   
    return (
         <>
              <Header isPokedex = {true}/>

            <PokedexPageStyled>
                <h1>Meus Pokemons</h1>
                {pokedex.map((pokemon) =>{                   
                       return(
                        <PokemonCard
                        key={pokemon.name}
                        pokemon={pokemon}
                        removeFromPokedex={removePokedex}
                        />

                       )           
               
                
                })} 
               


                {/* <div className="divCard">
                    <PokemonCard /> */}
                    {/* <PokemonCard />
                    <PokemonCard />
                    <PokemonCard /> */}
                {/* </div> */}
             </PokedexPageStyled> 


</>
      
    )
}
export default PokedexPage